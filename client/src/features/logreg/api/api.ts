/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { User } from '../type';

export const fetchLogOut = async (): Promise<{ message: string }> => {
  const res = await fetch('/api/auth/logout');
  const data: { message: string } = await res.json();
  return data;
};

export const fetchSignIn = async (user: User): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
};





export const fetchCheckUser = async (): Promise<{ message: string; user: User }> => {
  const res = await fetch('/api/auth/check');
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  if (res.status > 399) {
    throw new Error('Такого юзера не существует или пароль неверный');
  }
  const data = await res.json();

  return data;
};


