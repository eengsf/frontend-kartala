import axios from 'axios';
import { User } from '@/types/user-type';
import { Post } from '@/types/post-type';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const fetchUserDetail = async (id: string): Promise<User> => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};

export const fetchUserPosts = async (id: string): Promise<Post[]> => {
  const { data } = await axios.get(`${BASE_URL}/${id}/posts`);
  return data;
};
