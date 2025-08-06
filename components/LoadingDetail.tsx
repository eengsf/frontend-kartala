import React from 'react';
import Skeleton from './Skeleton';

const LoadingDetail = () => {
  return (
    <div className="my-4.5">
      <Skeleton height="h-3" width="w-52" className="my-3" />
      <div className="space-y-1 text-sm">
        <div className="flex gap-2">
          <Skeleton height="h-3" width="w-12" className="my-[3px]" />
          <Skeleton height="h-3" width="w-36" className="my-[3px]" />
        </div>
        <div className="flex gap-2">
          <Skeleton height="h-3" width="w-8" className="my-[3px]" />
          <Skeleton height="h-3 " width="w-32" className="my-[3px]" />
        </div>
        <div className="flex gap-2">
          <Skeleton height="h-3" width="w-10" className="my-[3px]" />
          <Skeleton height="h-3" width="w-36" className="my-[3px]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingDetail;
