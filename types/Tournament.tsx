import { Category, User } from '@/amplify/auth/post-confirmation/graphql/API';

export interface Tournament {
  categoryId: string;
  gameName: string;
  name: string;
  prize: number;
  userId?: string;
  category?: Category;
  user?: User;
  id?: string;
}
