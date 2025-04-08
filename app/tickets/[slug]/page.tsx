import TicketResume from '@/components/organisms/TicketResume';
import { redirect } from 'next/navigation';

export default async function Tickets({
  params,
}: {
  readonly params: { readonly slug?: string };
}) {
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    redirect('/');
  }

  return (
    <div className='flex h-full w-full flex-grow flex-col items-start justify-center py-5'>
      <TicketResume ticketId={resolvedParams.slug} />
    </div>
  );
}
