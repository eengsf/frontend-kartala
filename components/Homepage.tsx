'use client';

import FailedState from '@/components/FailedState';
import LoadingTable from '@/components/LoadingTable';
import { User } from '@/types/user-type';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { fetchUsers } from '@/lib/user-api';

const Homepage = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get('name') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('name', search);
    router.replace(`/?${params.toString()}`);
  }, [search, router]);

  const filteredUsers =
    users?.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <div>
      <div className="w-full flex sm:flex-row flex-col sm:items-center items-start justify-between gap-3 mb-4">
        <div>
          <h1 className="font-bold text-lg">Frontend Test Kartala 2025</h1>
        </div>
        <div className="relative sm:max-w-sm w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-customStrong"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-sm border border-customThin focus:border-customStrong focus:outline-none rounded-md py-1.5 px-7"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-customMain">
              <th className="w-[30%] p-2.5 text-left">Name</th>
              <th className="w-[20%] p-2.5 text-left">Email</th>
              <th className="w-[20%] p-2.5 text-left">City</th>
              <th className="w-[20%] p-2.5 text-left">Company</th>
              <th className="w-[10%] p-2.5 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <LoadingTable
                rows={5}
                cols={5}
                positions={['', '', '', '', 'center']}
              />
            ) : isError ? (
              <FailedState text="Error loading users" />
            ) : filteredUsers.length === 0 ? (
              <FailedState text="No users found." />
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-customThin">
                  <td className="p-2.5 text-black font-semibold">
                    {user.name}
                  </td>
                  <td className="p-2.5 text-customStrong">{user.email}</td>
                  <td className="p-2.5 text-customStrong">
                    {user.address.city}
                  </td>
                  <td className="p-2.5 text-customStrong">
                    {user.company.name}
                  </td>
                  <td className="p-2.5 text-center">
                    <div className="flex items-center justify-center gap-2.5">
                      <Link href={`/users/${user.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 text-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homepage;
