'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItems() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Button asChild variant={pathname === '/server' ? 'default' : 'outline'}>
        <Link href="/server">Server</Link>
      </Button>
      <Button asChild variant={pathname === '/client' ? 'default' : 'outline'}>
        <Link href="/client">Client</Link>
      </Button>
      <Button asChild variant={pathname === '/admin' ? 'default' : 'outline'}>
        <Link href="/admin">Admin</Link>
      </Button>
    </div>
  );
}
