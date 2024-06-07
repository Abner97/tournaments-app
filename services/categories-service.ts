import { Category } from '@/amplify/auth/post-confirmation/graphql/API';
import { client } from './client';

export async function getCategories(): Promise<Array<Category>> {
  const response = await client.models.Category.list();
  return response.data as unknown as Array<Category>;
}

export async function getCategory(id: string): Promise<Category> {
  const response = await client.models.Category.get({
    id,
  });
  return response.data as unknown as Category;
}

export async function createCategory(alias: string, description: string) {
  const response = await client.models.Category.create({
    alias,
    description,
  });
  return response.data;
}
