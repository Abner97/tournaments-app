import TournamentResume from '@/components/organisms/TournamentResume';
import { redirect } from 'next/navigation';

export default async function Tournament({
  params,
}: {
  readonly params: { readonly slug?: string };
}) {
  if (!params?.slug) {
    redirect('/');
  }

  return (
    <div className='flex h-full w-full flex-grow flex-col items-start justify-center py-5'>
      <TournamentResume tournamentId={params.slug} />
    </div>
  );
}
