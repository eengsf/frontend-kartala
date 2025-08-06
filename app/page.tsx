import { Suspense } from 'react';
import Homepage from '@/components/Homepage';
import Loading from '@/components/Loading';

export default function Page() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Homepage />
      </Suspense>
    </div>
  );
}
