import { cn } from '@/lib/utils';
import Link from 'next/link';
import Icon from '@atoms/Icons';
import { icons } from 'lucide-react';

interface PageLinkProps {
  href: string;
  text: string;
  icon?: keyof typeof icons;
}
const PageLink: React.FC<
  React.HTMLAttributes<HTMLAnchorElement> & PageLinkProps
> = ({ href, text, className, icon }) => {
  return (
    <Link
      className={cn(
        'grid h-full w-full grid-flow-col grid-cols-12 items-center gap-8 rounded-md px-2 text-left font-bold hover:bg-slate-600',
        className
      )}
      href={href}
    >
      {icon && <Icon name={icon} className='col-span-1' />}
      <span className={cn(icon ? 'col-span-11' : 'col-span-12')}> {text}</span>
    </Link>
  );
};

export default PageLink;
