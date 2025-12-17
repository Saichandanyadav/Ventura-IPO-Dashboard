import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="bg-orange-50 p-6 rounded-full mb-6 dark:bg-orange-900/20">
        <AlertTriangle className="w-16 h-16 text-orange-500 mx-auto" />
      </div>
      <h1 className="text-3xl font-extrabold text-[var(--foreground)] mb-2">Feature Under Construction</h1>
      <p className="text-[var(--secondary-foreground)] max-w-md mb-8 font-medium">We are working hard to bring this feature to you. Stay tuned for updates!</p>
      <Link href="/" className="bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3 rounded-xl font-bold hover:bg-[var(--primary)]/90">
        Back to Home
      </Link>
    </div>
  );
}
