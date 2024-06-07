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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@shadcnui/select';
import { getCategories } from '@/services/categories-service';
import { HTMLAttributes, useEffect, useState } from 'react';
import { Category } from '@/amplify/auth/post-confirmation/graphql/API';
import { createTournament } from '@/services/tournaments-service';
import { Tournament } from '@/types/Tournament';
import { cn } from '@/lib/utils';

const tournamentFormSchema = z.object({
  name: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
  gameName: z.string().min(2).max(50),
  prize: z.string(),
});

const categoriesMap = new Map<string, string>();
export const TournamentForm: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const form = useForm<z.infer<typeof tournamentFormSchema>>({
    resolver: zodResolver(tournamentFormSchema),
    defaultValues: {
      name: '',
      category: '',
      gameName: '',
      prize: '0',
    },
  });

  const [categories, setCategories] = useState<Array<Category>>([]);

  function onSubmit(values: z.infer<typeof tournamentFormSchema>) {
    const categoryId = categoriesMap.get(values.category);
    if (!categoryId) {
      return;
    }
    const tournamentData: Tournament = {
      name: values.name,
      categoryId,
      gameName: values.gameName,
      prize: parseFloat(values.prize),
    };
    createTournament(tournamentData).then((_) => {
      alert('Torneo creado');
      window.location.reload();
    });
  }

  useEffect(() => {
    getCategories().then((categories) => {
      categories.forEach((category) => {
        categoriesMap.set(category.alias, category.id);
      });
      setCategories(categories || []);
    });
  }, []);

  return (
    <div
      className={cn('h-full w-96 rounded-md bg-slate-100 p-2', className)}
      onClick={(event) => event.stopPropagation()}
    >
      <Form {...form}>
        <h1 className='text-2xl font-bold'>Crear Torneo</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del torneo</FormLabel>
                <FormControl>
                  <Input placeholder='Mi torneo' {...field} />
                </FormControl>
                <FormDescription>
                  Nombre que le asignaras al torneo
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select game category' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.alias}>
                        {category.alias}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>Selecciona una categoria</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='gameName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del juego</FormLabel>
                <FormControl>
                  <Input placeholder='Juego pro' {...field} />
                </FormControl>
                <FormDescription>Nombre del juego</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='prize'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Premio</FormLabel>
                <FormControl>
                  <Input
                    placeholder='chen chen en tu bolsillo'
                    {...field}
                    type='number'
                  />
                </FormControl>
                <FormDescription>Premio en efectivo</FormDescription>
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
