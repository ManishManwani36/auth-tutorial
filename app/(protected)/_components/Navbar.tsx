'use client';

import { UserButton } from '@/components/auth/UserButton';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  GearIcon,
  HamburgerMenuIcon,
  LaptopIcon,
  LockClosedIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary justify-between items-center flex p-4 shadow-md w-full">
      <div className="hidden gap-x-2 sm:flex">
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <div className="sm:hidden flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HamburgerMenuIcon className="h-7 w-7" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 flex flex-col gap-1" align="end">
            <span>
              <Link href="/server">
                <DropdownMenuItem
                  className={pathname === '/server' ? 'bg-slate-100' : ''}
                >
                  <LaptopIcon className="h-4 w-4 mr-2" />
                  Server
                </DropdownMenuItem>
              </Link>
            </span>
            <span>
              <Link href="/client">
                <DropdownMenuItem
                  className={pathname === '/client' ? 'bg-slate-100' : ''}
                >
                  <PersonIcon className="h-4 w-4 mr-2" />
                  Client
                </DropdownMenuItem>
              </Link>
            </span>
            <span>
              <Link href="/admin">
                <DropdownMenuItem
                  className={pathname === '/admin' ? 'bg-slate-100' : ''}
                >
                  <LockClosedIcon className="h-4 w-4 mr-2" />
                  Admin
                </DropdownMenuItem>
              </Link>
            </span>
            <span>
              <Link href="/settings">
                <DropdownMenuItem
                  className={pathname === '/settings' ? 'bg-slate-100' : ''}
                >
                  <GearIcon className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
              </Link>
            </span>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <UserButton />
    </nav>
  );
}
