/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type {
  CreateJobPostInput,
  EditJobPostInput,
  GetCompanyJobPostsInput,
  GetJobPostInput,
  JobPost,
  JopPostFilterInput,
  SavedJobPostsInput,
  SaveJobPostInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';
import { clearUndefined } from '@/util/helper';

async function getPostedJobs(input?: JopPostFilterInput): Promise<JobPost[]> {
  const filter: any = Object.keys(input ?? {}).reduce((acc, key) => {
    if (input?.[key] !== undefined) {
      acc[key] = input[key];
    }
    return acc;
  }, {});

  const jobPosts = await prisma.jobPost.findMany({
    where: {
      ...filter,
    },
    include: {
      affiliate: true,
      company: true,
    }, // take: 5,
    // skip: 1, // Skip the cursor
    // cursor: {
    //   id: myCursor,
    // },
  });

  // console.log('get Posts', input, jobPosts);

  return jobPosts;
}

async function getCompanyPostedJobs(input: GetCompanyJobPostsInput) {
  // : Promise<CompanyJobPostsResponse>
  const jobPosts = await prisma.jobPost.findMany({
    where: {
      companyId: input.companyId,
    },
    include: {
      // company: true,
    },
  });

  // console.log('get Posts', input, jobPosts);

  return {
    errors: [],
    jobPosts,
  };
}

async function getJobPostApplications(input: any) {
  // : Promise<CompanyJobPostsResponse>
  const jobApplications = await prisma.jobApplication.findMany({
    where: {
      jobPostId: input.jobPostId,
    },
    include: {
      applicant: true,
    },
  });

  // console.log('get Posts', input, jobPosts);

  return {
    errors: [],
    payload: jobApplications.map((ja) => ({
      application: ja,
      applicant: ja.applicant,
    })),
  };
}

async function getSavedJobs(input: SavedJobPostsInput): Promise<JobPost[]> {
  const jobPosts = await prisma.jobPost.findMany({
    where: {
      savedBy: {
        every: {
          accountId: input.accountId,
        },
      },
    },
    include: {
      affiliate: true,
      company: true,
      savedBy: true,
    },
  });

  // console.log('get saved Posts', input, jobPosts);

  return jobPosts;
}

async function createJobPost(input: CreateJobPostInput) {
  const jobPost = await prisma.jobPost.create({
    data: {
      title: input.title,
      description: input.description,
      jobSite: input.jobSite,
      jobType: input.jobType,
      email: input.email,
      category: input.category,
      vacancy: input.vacancy,
      applicationDeadline: input.applicationDeadline,
      englishLevel: input.englishLevel,
      salaryType: input.salaryType,
      skills: input.skills,
      interviewQuestions: input.interviewQuestions,
      location: input.location,
      experienceLevel: input.experienceLevel,

      salary: input.salary,
      jobExperience: input.jobExperience,
      isVisible: input.isVisible,
      otherLanguages: input.otherLanguages,
      companyId: input.companyId,

      // affiliate? @relation(fields: [affiliateId], references: [id])
      // affiliateId String?
    },
  });

  return {
    errors: [],
    jobPost,
  };
}

async function editJobPost(input: EditJobPostInput) {
  const nunNullEditedInput = clearUndefined(input.editedData);

  console.log('edit input : ', nunNullEditedInput);

  const jobPost = await prisma.jobPost.update({
    where: {
      id: input.filter.jobPostId,
      companyId: input.filter.companyId,
    },

    data: {
      ...nunNullEditedInput,
    },
  });

  console.log('updated jobpost : ', jobPost);

  if (jobPost == null) {
    return {
      errors: [
        {
          message: 'jobPost not found',
        },
      ],
      jobPost: null,
    };
  }

  return {
    errors: [],
    jobPost,
  };
}

async function saveJobPost(input: SaveJobPostInput) {
  const jobPost = await prisma.applicant.update({
    data: {
      savedJobs: {
        ...(Boolean(input.save) && {
          connect: {
            id: input.jobPostId,
          },
        }),

        ...(!input.save && {
          disconnect: {
            id: input.jobPostId,
          },
        }),
      },
    },
    where: {
      accountId: input.accountId,
    },
    include: {
      savedJobs: true,
    },
  });

  return jobPost.savedJobs.find((p) => p.id === input.jobPostId) ?? null;
}

async function getJobPost(input: GetJobPostInput) {
  const jobPost = await prisma.jobPost.findUnique({
    where: {
      id: input.id,
    },
    include: {
      // company: true,
      // affiliate: true,
      // savedBy: true,
    },
  });

  // console.log('get jobPost', input, jobPost);

  return jobPost;
}

const jobPost = {
  getPostedJobs,
  createJobPost,
  getSavedJobs,
  saveJobPost,
  getJobPost,
  editJobPost,
  getCompanyPostedJobs,
  getJobPostApplications,
};

export default jobPost;
