import React from 'react';
import Image from 'next/image';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '@/amplify/data/resource';
import { cn } from '@/lib/utils';

const SudoTournamentsLogo: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({
  className,
}) => {
  // client.models.Category.get({
  //   categoryId: ""
  // })
  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center',
        className
      )}
    >
      <Image
        src='/images/sudo_tournaments_logo.png'
        alt='Sudo tournaments logo'
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
};

export default SudoTournamentsLogo;
