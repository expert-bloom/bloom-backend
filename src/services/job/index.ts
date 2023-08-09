import type {
  CreateJobPostInput,
  JopPostFilterInput,
} from '@/graphql/schema/types.generated';

async function getPostedJobs({ filter }: { filter: JopPostFilterInput }) {
  return {};
}

async function createJobPost(job: CreateJobPostInput) {
  return {};
}

const jobPost = {
  getPostedJobs,
  createJobPost,
};

export default jobPost;
