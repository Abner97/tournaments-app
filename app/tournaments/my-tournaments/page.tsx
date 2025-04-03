'use client';

import TournamentsContainer from '@/components/molecules/CardsContainer';
import { TournamentForm } from '@/components/organisms/TournamentForm';
import { Button } from '@/components/ui/button';
import { userLoadingStore } from '@/hooks/state/useLoading';
import { getTournamentByUser } from '@/services/tournaments-service';
import { Tournament } from '@/types/Tournament';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MyTournaments = () => {
  const [tournaments, setTournaments] = useState<Array<Tournament>>([]);
  const [showForm, setShowForm] = useState(false);
  const { setLoading } = userLoadingStore();
  useEffect(() => {
    setLoading(true);
    getTournamentByUser().then((tournaments) => {
      setTournaments(tournaments);
      setLoading(false);
    });
  }, []);
  return (
    <div
      className='relative flex h-full w-full flex-col'
      id='my-tournaments-page'
    >
      <div className='flex h-20 w-full items-center justify-end pr-5'>
        <Button onClick={() => setShowForm(true)}>Create Tournament</Button>
      </div>
      <TournamentsContainer tournaments={tournaments} self />
      {showForm &&
        createPortal(
          <div
            className='bg-opacity-60 absolute z-30 flex h-full w-full items-center justify-center bg-slate-800 backdrop-blur-sm transition-all duration-500 ease-in-out'
            onClick={() => setShowForm(false)}
          >
            <TournamentForm className='absolute h-[620px] overflow-auto' />
          </div>,
          document.getElementById('my-tournaments-page') || document.body
        )}
    </div>
  );
};

export default MyTournaments;
