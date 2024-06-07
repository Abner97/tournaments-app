'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@shadcnui/form';
import { Input } from '@shadcnui/input';
import { Button } from '@shadcnui/button';
import { createCategory } from '@/services/categories-service';

const categoriesFormSchema = z.object({
  alias: z.string().min(2).max(50),
  description: z.string(),
});

export const CategoriesForm = () => {
  const form = useForm<z.infer<typeof categoriesFormSchema>>({
    resolver: zodResolver(categoriesFormSchema),
    defaultValues: {
      alias: '',
      description: '',
    },
  });

  function onSubmit(values: z.infer<typeof categoriesFormSchema>) {
    createCategory(values.alias, values.description).then((_) => {
      alert('Categoria Creada');
    });
  }

  return (
    <div className='h-96 w-96 rounded-md bg-slate-100 p-2'>
      <h1 className='text-2xl font-bold'>Crear Categoria</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='alias'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de Categoria</FormLabel>
                <FormControl>
                  <Input placeholder='Shooter' {...field} />
                </FormControl>
                <FormDescription>
                  Nombre que le asignaras a la categoria
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripcion de categoria</FormLabel>
                <FormControl>
                  <Input placeholder='Descripcion' {...field} />
                </FormControl>
                <FormDescription>Descripcion de categoria</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex w-full justify-end'>
            <Button type='submit'>Crear</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
