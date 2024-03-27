'use client';

import { UserButton } from '@/components/auth/UserButton';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import NavItems from './NavItems';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(true);

  const toggleNav = () => setNavOpen((prev) => !prev);

  return (
    <nav
      className={cn(
        'hidden sm:flex bg-secondary px-2 py-4 shadow-md w-full max-w-72 h-full transition-all',
        navOpen ? '' : 'ml-[-288px]'
      )}
    >
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex justify-between items-center py-2">
          <UserButton />
          <Button
            variant="outline"
            size="icon"
            onClick={toggleNav}
            className={cn('transition-all z-10', navOpen ? '' : 'mr-[-68px]')}
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
        </div>
        <NavItems />
      </div>
    </nav>
  );
}
