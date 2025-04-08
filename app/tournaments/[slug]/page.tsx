import TournamentResume from '@/components/organisms/TournamentResume';
import { redirect } from 'next/navigation';

export default async function Tournament(
  props: {
    readonly params: Promise<{ readonly slug?: string }>;
  }
) {
  const params = await props.params;
  if (!params?.slug) {
    redirect('/');
  }

  return (
    <div className='flex h-full w-full flex-grow flex-col items-start justify-center py-5'>
      <TournamentResume tournamentId={params.slug} />
    </div>
  );
}
