'use client';

import { admin } from '@/actions/admin';
import { FormSuccess } from '@/components/FormSuccess';
import RoleGate from '@/components/auth/RoleGate';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader } from '@/components/ui/card';
import { UserRole } from '@prisma/client';
import { toast } from 'sonner';

export default function AdminPage() {
  const onServerActionClick = () => {
    admin().then((res) => {
      if ('success' in res) {
        toast.success(res.success);
      } else {
        toast.error(res.error);
      }
    });
  };

  const onApiRouteClick = () => {
    fetch('/api/admin').then((res) => {
      if (res.ok) {
        toast.success('Allowed API Route');
      } else {
        toast.error('Forbidden API Route');
      }
    });
  };
  return (
    <>
      <CardHeader>
        <p className="text-2xl font-semibold text-center">🔑 Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You have permission to view this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </>
  );
}
