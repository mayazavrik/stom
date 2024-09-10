import type { Post } from './Post';

export type PostsState = {
  posts: Post[];
  error: string | null;
  loading: boolean;
};
