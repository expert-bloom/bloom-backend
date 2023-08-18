import type {
  CreateJobPostInput,
  JobPost,
  JobPostPayload,
  JopPostFilterInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

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
      postedBy: true,
    },
  });

  console.log('get Posts', input, jobPosts);

  return jobPosts;
}

async function createJobPost(
  input: CreateJobPostInput,
): Promise<JobPostPayload> {
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
      posterAccountId: input.postedBy,

      // affiliate   Affiliate? @relation(fields: [affiliateId], references: [id])
      // affiliateId String?
    },
  });

  return {
    errors: [],
    jobPost,
  };
}

const jobPost = {
  getPostedJobs,
  createJobPost,
};

export default jobPost;
