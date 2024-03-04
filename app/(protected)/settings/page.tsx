'use client';

import { logout } from '@/actions/logout';
// import { useCurrentUser } from '@/hooks/useCurrentUser';

export default function SettingsPage() {
  // const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={onClick}>
        Sign Out
      </button>
    </div>
  );
}
