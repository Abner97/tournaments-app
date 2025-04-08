import { Ticket } from '@/types/Ticket';
import { client } from './client';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

export async function createTicket(ticketData: Ticket) {
  const { userId } = await getCurrentUser();
  const user = await fetchUserAttributes();

  const response = await client.models.Ticket.create({
    ...ticketData,
    createdAt: ticketData.createdAt.toISOString(),
    userId,
  });
  console.log(response);
  if (!response.data) {
    throw new Error('Error creating ticket');
  }
  client.queries.generateQrCode({
    ticketId: response.data.id,
    userEmail: user.email,
    userId,
  });
}

export async function getTicketById(ticketId: string) {
  const { data } = await client.models.Ticket.get({ id: ticketId });

  return data ? getSingleTournamentData(data) : null;
}

export const getSingleTournamentData: (data: any) => Promise<Ticket> = async (
  data: any
) => {
  return {
    ...data,
    tournament: (await data.tournament()).data,
    user: (await data.user()).data,
  } as unknown as Ticket;
};
