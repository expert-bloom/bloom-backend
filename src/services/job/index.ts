import type {
  CreateJobPostInput,
  JopPostFilterInput,
} from '@/graphql/schema/types.generated';
import prisma from '@/lib/prisma';

async function getPostedJobs({ filter }: { filter: JopPostFilterInput }) {
  return {};
}

async function createJobPost(input: CreateJobPostInput) {
  const job = await prisma.jobPost.create({
    data: {
      title: input.title,
      description: input.description,
      email: input.email,
      category: input.jobCategory,
      jobType: input.jobType,
      vacancy: input.jobVacancy,
      applicationDeadline: input.jobDeadline,
      englishLevel: input.englishLevel,
      compensation: input.compensation,



      company: {
        connect: {
          id: input.companyId,
        },
      },
    },
  });

  return {};
}

const jobPost = {
  getPostedJobs,
  createJobPost,
};

export default jobPost;
