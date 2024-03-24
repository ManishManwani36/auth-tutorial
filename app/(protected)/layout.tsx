import Navbar from './_components/Navbar';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="h-full w-full max-w-xl">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
