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
    startDate: tournamentData.startDate,
    endDate: tournamentData.endDate,
    inscriptionPrice: tournamentData.inscriptionPrice,
    description: tournamentData.description,
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
  const { data } = await client.models.Tournament.get({ id: tournamentId });

  return data ? getSingleTournamentData(data) : null;
}

export async function getAllTournaments(): Promise<Tournament[]> {
  const { data } = await client.models.Tournament.list();
  return getAllTournamentData(data);
}

export const getSingleTournamentData: (
  data: any
) => Promise<Tournament> = async (data: any) => {
  return {
    ...data,
    category: (await data.category()).data,
    user: (await data.user()).data,
    tickets: (await data.tickets()).data,
  } as unknown as Tournament;
};

export const getAllTournamentData: (
  data: Array<any>
) => Promise<Array<Tournament>> = async (data: Array<any>) => {
  return await Promise.all(
    data.map(async (tournament) => getSingleTournamentData(tournament))
  );
};
