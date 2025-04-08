'use client';
import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { userLoadingStore } from '@/hooks/state/useLoading';
import { getTicketById } from '@/services/ticket-service';
interface TicketResumeProps {
  ticketId: string;
}

const TicketResume: React.FC<TicketResumeProps> = ({ ticketId }) => {
  const { setLoading } = userLoadingStore();

  const { data, isLoading } = useQuery({
    queryKey: ['getTicketById'],
    queryFn: () => getTicketById(ticketId),
  });
  const router = useRouter();

  useEffect(() => {
    setLoading(isLoading);
    console.log(data);
    if (!isLoading && !data) {
      router.back();
    }
  }, [isLoading, data]);

  return (
    <div className='text-primary-foreground flex h-full w-full flex-col items-start justify-start gap-2'>
      <ul className='flex w-full flex-grow flex-col items-center justify-center gap-4 px-5'>
        <li>
          <p>Nombre del torneo: {data?.tournament?.name}</p>
        </li>
        <li>
          <p>Fecha de inicio: {data?.tournament?.startDate}</p>
        </li>
        <li>
          <p>Fecha de finalización: {data?.tournament?.endDate}</p>
        </li>
        <li>
          <p>Ticket valido para: {data?.user?.name}</p>
        </li>
      </ul>
      <div className='flex h-auto w-full justify-center'>
        <Button
          onClick={() => {
            router.push(`/tournaments/${data?.tournamentId}`);
          }}
          className='w-1/4'
        >
          Ver información del torneo
        </Button>
      </div>
    </div>
  );
};

export default TicketResume;
