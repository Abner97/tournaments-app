import TournamentResume from '@/components/organisms/TournamentResume';
import { redirect } from 'next/navigation';

export default async function Tournament({
  params,
}: {
  readonly params: { readonly slug?: string };
}) {
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    redirect('/');
  }

  return (
    <div className='mt-3 flex h-full w-full flex-grow flex-col items-start justify-center'>
      <TournamentResume tournamentId={resolvedParams.slug} />
    </div>
  );
}
