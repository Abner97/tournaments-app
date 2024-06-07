'use client';
import React from 'react';
import SudoTournamentsLogo from '../atoms/SudoTournamentsLogo';
import PageLink from '../molecules/PageLink';
import { icons } from 'lucide-react';
import { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

interface AppRoute {
  href: string;
  text: string;
  icon: keyof typeof icons;
}

const appRoutes: Array<AppRoute> = [
  {
    href: '/my-tournaments',
    text: 'Mis torneos',
    icon: 'Gamepad',
  },
  {
    href: '/tournaments',
    text: 'Torneos disponibles',
    icon: 'Swords',
  },
  {
    href: '/plans',
    text: 'Plan',
    icon: 'Gem',
  },
  {
    href: '/config',
    text: 'Configuracion',
    icon: 'ChevronFirst',
  },
];
const SideBar: React.FC<WithAuthenticatorProps> = ({ signOut, user }) => {
  return (
    <div className='grid h-full max-w-72 grid-flow-row grid-cols-1 grid-rows-12 flex-col items-center bg-slate-800 p-2'>
      <SudoTournamentsLogo className='row-span-2 flex h-full cursor-pointer items-center justify-center' />
      {appRoutes.map((route) => (
        <PageLink
          key={route.href}
          {...route}
          className='row-span-1 text-white'
        />
      ))}
      <div className='row-span-1 flex h-full w-full items-center justify-center'>
        <p className='text-white'>{user?.signInDetails?.loginId}</p>
      </div>
      <div className='row-span-1 flex h-full w-full items-center justify-center'>
        <button onClick={signOut} className='text-white'>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default withAuthenticator(SideBar);
