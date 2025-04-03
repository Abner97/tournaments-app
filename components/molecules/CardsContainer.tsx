import React from 'react';

import TournamentCard from '@atoms/TournamentCard';
import { Tournament } from '@/types/Tournament';
import EmptyState from '../atoms/EmptyState';

interface TournamentContainerProps {
  tournaments: Array<Tournament>;
  self: boolean;
}

const TournamentsContainer: React.FC<TournamentContainerProps> = ({
  tournaments,
  self,
}) => {
  return tournaments.length ? (
    <div className='grid h-full w-full grid-cols-[repeat(auto-fill,minmax(350px,1fr))] items-center justify-items-center gap-5 overflow-auto py-5'>
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          title={tournament.name}
          self={self}
          game={tournament.gameName}
          category={tournament.category?.alias || 'No reconocida'}
          tournamentId={tournament.id!}
          owner={tournament.user?.name || 'Dueño no reconocido'}
          prize={tournament.prize}
        />
      ))}
    </div>
  ) : (
    <EmptyState />
  );
};

export default TournamentsContainer;
