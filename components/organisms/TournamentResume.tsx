'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getTournamentById } from '@/services/tournaments-service';
import { userLoadingStore } from '@/hooks/state/useLoading';
import { formatNumberToMoney } from '@/lib/utils';
import { createTicket } from '@/services/ticket-service';
import { Ticket } from '@/types/Ticket';
import { StorageImage } from '@aws-amplify/ui-react-storage';

interface TournamentResumeProps {
  tournamentId: string;
}

const TournamentResume: React.FC<TournamentResumeProps> = ({
  tournamentId,
}) => {
  const { setLoading } = userLoadingStore();
  const [formatedPrice, setFormatedPrice] = useState('');
  const [formatedPrize, setFormatedPrize] = useState('');
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
    console.log(data);
    const formatedPrice = formatNumberToMoney(data?.registrationPrice ?? 0);
    setFormatedPrice(formatedPrice);
    const formatedPrize = formatNumberToMoney(data?.prize ?? 0);
    setFormatedPrize(formatedPrize);
  }, [isLoading, data]);

  return (
    <div className='text-primary-foreground flex h-full w-full flex-col items-start justify-start gap-2'>
      <h1 className='ml-1 text-4xl'>{data?.gameName}</h1>
      <div className='flex h-auto max-h-96 w-full items-center justify-center overflow-hidden'>
        {data?.imageKey ? (
          <StorageImage alt='tournament image' path={data.imageKey ?? ''} />
        ) : null}
      </div>
      <ul className='flex w-full flex-grow flex-col items-start justify-around px-5'>
        <li>
          <p>Categoria: {data?.category?.alias}</p>
        </li>
        <li>
          <p>Descripción: {data?.description}</p>
        </li>
        <li>
          <p>Premio: {formatedPrize}</p>
        </li>
        <li>
          <p>Fecha de inicio: {data?.startDate}</p>
        </li>
        <li>
          <p>Creado por: {data?.user?.name}</p>
        </li>
      </ul>
      <div className='flex h-auto w-full justify-center'>
        <Button
          onClick={async () => {
            if (!data || !data.user) return;

            const payload: Ticket = {
              tournamentId,
              price: data.registrationPrice,
              userId: data?.user.id,
              createdAt: new Date(),
            };
            createTicket(payload).then(() => {
              alert(
                `Has pagado ${formatedPrice}, revisa tu correo ${data.user?.email}`
              );
            });
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
