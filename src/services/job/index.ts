import JobPosts, { type IJobPost } from '@/models/JobPost';
import type {
  CreateJobPostInput,
  JopPostFilterInput,
} from '@/graphql/schema/types.generated';

async function getPostedJobs({ filter }: { filter: JopPostFilterInput }) {
  return JobPosts.find(filter).select(['email']);
}

async function createJobPost(job: CreateJobPostInput) {
  const newJobPost = await JobPosts.create(job);

  const pjo: IJobPost & { _id: string } = newJobPost.toObject({
    flattenObjectIds: true,
  });

  return pjo;
}

const jobPost = {
  getPostedJobs,
  createJobPost,
};

export default jobPost;
