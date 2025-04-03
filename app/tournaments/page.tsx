'use client';

import TournamentsContainer from '@/components/molecules/CardsContainer';
import { userLoadingStore } from '@/hooks/state/useLoading';
import { getAllTournaments } from '@/services/tournaments-service';
import { Tournament } from '@/types/Tournament';
import { useEffect, useState } from 'react';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Array<Tournament>>([]);
  const { setLoading } = userLoadingStore();
  useEffect(() => {
    setLoading(true);
    getAllTournaments().then((tournaments) => {
      setTournaments(tournaments);
      setLoading(false);
    });
  }, []);
  return <TournamentsContainer tournaments={tournaments} self={false} />;
};

export default Tournaments;
