import MobileNav from './_components/MobileNav';
import Navbar from './_components/Navbar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Navbar />
      <MobileNav />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
