'use client';

import LoadingDetail from '@/components/LoadingDetail';
import LoadingTable from '@/components/LoadingTable';
import { Post } from '@/types/post-type';
import { User } from '@/types/user-type';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchUserDetail, fetchUserPosts } from '@/lib/user-api';
import Link from 'next/link';

const UserDetailPage = () => {
  const { id } = useParams();
  const userId = id as string;

  const { data: user, isLoading: loadingUser } = useQuery<User>({
    queryKey: ['user', userId],
    queryFn: () => fetchUserDetail(userId),
    enabled: !!userId,
  });

  const { data: posts, isLoading: loadingPosts } = useQuery<Post[]>({
    queryKey: ['posts', userId],
    queryFn: () => fetchUserPosts(userId),
    enabled: !!userId,
  });

  return (
    <div>
      <div className="text-sm text-customStrong mb-3">
        <Link href="/" className="hover:underline text-blue-600">
          Users
        </Link>{' '}
        / Detail
      </div>

      {loadingUser ? (
        <LoadingDetail />
      ) : (
        <div className="mb-4">
          <h1 className="text-xl font-bold">{user?.name}</h1>
          <div className="space-y-1 text-sm">
            <div className="flex gap-2">
              <span className="w-14">Email</span>
              <span className="text-customStrong">: {user?.email}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-14">City</span>
              <span className="text-customStrong">: {user?.address.city}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-14">Company</span>
              <span className="text-customStrong">: {user?.company.name}</span>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">Posts</h2>
      <table className="w-full text-sm">
        <thead className="bg-customMain">
          <tr>
            <th className="p-2  w-12 text-center">No</th>
            <th className="p-2 text-left w-[30%]">Title</th>
            <th className="p-2 text-left flex-1">Body</th>
          </tr>
        </thead>
        <tbody>
          {loadingPosts ? (
            <LoadingTable rows={4} cols={3} positions={['center', '', '']} />
          ) : (
            posts?.map((post, index) => (
              <tr key={post.id} className="border-t border-customThin">
                <td className="p-2 text-center">{index + 1}</td>
                <td className="p-2 font-semibold">{post.title}</td>
                <td className="p-2 text-customStrong">{post.body}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailPage
