'use client';

import { User, ChevronDown } from 'lucide-react';
import { Settings, LogOut } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import LogoutButton from '@/components/auth/LogoutButton';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const UserButton = () => {
  const user = useCurrentUser();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-between items-center hover:bg-slate-200 active:scale-95 transition-all p-2 rounded-md">
        <div className="flex justify-center items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user?.image || ''} />
            <AvatarFallback className="bg-sky-500">
              <User className="text-white w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          {user?.name}
        </div>
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="start">
        <DropdownMenuItem
          asChild
          className={pathname === '/settings' ? 'bg-secondary' : ''}
        >
          <Link href="/settings">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>
        <Separator className="my-1" />
        <LogoutButton>
          <DropdownMenuItem>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
