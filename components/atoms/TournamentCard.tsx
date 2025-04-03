import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { deleteTournament } from '@/services/tournaments-service';

interface TournamentCardProps {
  title: string;
  tournamentId: string;
  game: string;
  category: string;
  self?: boolean;

  owner: string;
  prize?: number;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  title,
  game,
  category,
  self,
  tournamentId,
  owner,
  prize,
}) => {
  return (
    <Card className='h-auto w-[350px]'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{game}</CardDescription>
      </CardHeader>
      <CardContent className='flex items-center'>
        <ul>
          <li>{category}</li>
          <li>Created by: {owner}</li>
          <li>Prize: ${prize?.toFixed(2)} </li>
        </ul>
      </CardContent>
      <CardFooter className='flex justify-between'>
        {tournamentId && self && (
          <Button
            onClick={async () => {
              deleteTournament(tournamentId).then(() => {
                alert('Tournament deleted');
                window.location.reload();
              });
            }}
          >
            Delete
          </Button>
        )}
        {tournamentId && !self && (
          <Button
            onClick={async () => {
              window.location.href = `/tournaments/${tournamentId}`;
            }}
          >
            Anotarse
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;
