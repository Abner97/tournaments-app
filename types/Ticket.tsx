import { Tournament, User } from '@/amplify/auth/post-confirmation/graphql/API';

export interface Ticket {
  createdAt: Date;
  price: number;
  tournamentId: string;
  userId: string;
  tournament?: Tournament;
  user?: User;
}
