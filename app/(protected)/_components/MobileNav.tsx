'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavItems from './NavItems';
import { UserButton } from '@/components/auth/UserButton';
import { PanelLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  return (
    <nav className="sm:hidden flex absolute top-0 left-0">
      <Sheet>
        <SheetTrigger
          className={cn(
            buttonVariants({ variant: 'outline', size: 'icon' }),
            'mx-6 my-4'
          )}
        >
          <PanelLeft className="h-5 w-5" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-3/4 min-w-52 max-w-72 bg-secondary p-2"
        >
          <UserButton />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}
