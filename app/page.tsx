"use client";
import { useRouter } from 'next/navigation';
import { ipoList } from '../data/mockData';
import Image from 'next/image';

export default function IPOListPage() {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 w-full">
      <h1 className="text-xl font-bold mb-8 text-[var(--foreground)]">IPO Dashboard</h1>
      
      <div className="border border-[var(--border)] bg-[var(--card)] rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-[var(--secondary)] border-b border-[var(--border)]">
              <tr className="text-[var(--muted-foreground)] text-[11px] uppercase tracking-wider font-bold">
                <th className="p-5">Company / Issue date</th>
                <th className="p-5">Issue size</th>
                <th className="p-5">Price range</th>
                <th className="p-5 text-right">Min invest/qty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {ipoList.map((ipo) => (
                <tr 
                  key={ipo.id} 
                  onClick={() => router.push(`/ipo/${ipo.id}`)}
                  className="hover:bg-[var(--secondary)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="relative w-10 h-10 shrink-0">
                        <Image 
                          src={ipo.logo} 
                          alt={`${ipo.name} logo`}
                          fill
                          className="rounded-full border border-[var(--border)] p-1 object-contain bg-[var(--background)]"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-[var(--foreground)]">{ipo.name}</div>
                        <div className="text-xs text-[var(--muted-foreground)] font-medium">{ipo.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 font-bold text-[var(--foreground)]">{ipo.issueSize}</td>
                  <td className="p-5 font-bold text-[var(--foreground)]">{ipo.priceRange}</td>
                  <td className="p-5 text-right">
                    <div className="font-bold text-[var(--foreground)]">{ipo.minInvest}</div>
                    <div className="text-xs text-[var(--muted-foreground)] font-medium">{ipo.minQty}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
