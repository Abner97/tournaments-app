'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTournamentById } from '@/services/tournaments-service';
import { userLoadingStore } from '@/hooks/state/useLoading';
interface TournamentResumeProps {
  tournamentId: string;
}

const TournamentResume: React.FC<TournamentResumeProps> = ({
  tournamentId,
}) => {
  const { setLoading } = userLoadingStore();
  const [formatedPrice, setFormatedPrice] = useState('');
  const { data, isLoading } = useQuery({
    queryKey: ['getTournamentById'],
    queryFn: () => getTournamentById(tournamentId),
  });
  const router = useRouter();

  useEffect(() => {
    setLoading(isLoading);
    if (!isLoading && !data) {
      router.back();
    }
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(data?.inscriptionPrice ?? 0);
    setFormatedPrice(formattedPrice);
  }, [isLoading, data]);

  return (
    <div className='text-primary-foreground flex h-full w-full flex-col items-start justify-start gap-2'>
      <h1 className='ml-1 text-4xl'>{data?.gameName}</h1>
      <div className='h-full max-h-96 w-full bg-red-400'></div>
      <ul className='flex w-full flex-grow flex-col items-start justify-around px-5'>
        <li>
          <p>Categoria: {data?.category?.alias}</p>
        </li>
        <li>
          <p>Precio: {data?.prize}</p>
        </li>
        <li>
          <p>Creado por: {data?.user?.name}</p>
        </li>
      </ul>
      <div className='flex h-auto w-full justify-center pb-10'>
        <Button
          onClick={() => {
            router.push(`/tournaments/${data?.id}/checkout`);
          }}
          className='w-1/4'
        >
          Pagar {formatedPrice}
        </Button>
      </div>
    </div>
  );
};

export default TournamentResume;
