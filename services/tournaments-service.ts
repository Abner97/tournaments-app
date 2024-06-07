import { Tournament } from '@/types/Tournament';
import { client } from './client';
import { getCurrentUser } from 'aws-amplify/auth';

export async function createTournament(tournamentData: Tournament) {
  const { userId } = await getCurrentUser();
  return client.models.Tournament.create({
    name: tournamentData.name,
    userId,
    prize: tournamentData.prize,
    gameName: tournamentData.gameName,
    categoryId: tournamentData.categoryId,
  });
}

export function deleteTournament(tournamentId: string) {
  return client.models.Tournament.delete({ id: tournamentId });
}

export async function getTournamentByUser(): Promise<Tournament[]> {
  const { userId } = await getCurrentUser();
  const response = await client.models.Tournament.list({
    filter: {
      userId: {
        beginsWith: userId,
      },
    },
  });

  return getAllTournamentData(response.data);
}

export async function getTournamentById(tournamentId: string) {
  const response = await client.models.Tournament.get({ id: tournamentId });

  return response.data;
}

export async function getAllTournaments(): Promise<Tournament[]> {
  const { data } = await client.models.Tournament.list();
  return getAllTournamentData(data);
}

export const getAllTournamentData: (
  data: Array<any>
) => Promise<Array<Tournament>> = async (data: Array<any>) => {
  return await Promise.all(
    data.map(async (tournament) => {
      return {
        ...tournament,
        category: (await tournament.category()).data,
        user: (await tournament.user()).data,
        tickets: (await tournament.tickets()).data,
      } as unknown as Tournament;
    })
  );
};
