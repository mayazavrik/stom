/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { Post, PostId } from '../types/Post';

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('/api/news');

  if (res.status >= 400) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export const fetchPostRemove = async (id: number): Promise<PostId> => {
  const res = await fetch(`/api/news/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const fetchPostChange = async (obj: Post): Promise<Post> => {
  const res = await fetch(`/api/news/${obj.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ img: obj.img, text: obj.text }),
  });
  return res.json();
};
