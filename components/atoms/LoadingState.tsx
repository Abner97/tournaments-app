'use client';
import { userLoadingStore } from '@/hooks/state/useLoading';
import Icon from '@atoms/Icons';

const LoadingState = () => {
  const { loading } = userLoadingStore();
  return loading ? (
    <div className='absolute z-30 flex h-full w-full items-center justify-center bg-slate-600'>
      <Icon
        name='LoaderCircle'
        className='animate-spin text-white'
        size={100}
      />
    </div>
  ) : null;
};

export default LoadingState;
