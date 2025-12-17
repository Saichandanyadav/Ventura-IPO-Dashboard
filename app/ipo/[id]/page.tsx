"use client";
import { useParams, useRouter } from 'next/navigation';
import { ipoList } from '../../../data/mockData';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Download, Check } from 'lucide-react';

export default function IPODetailsPage() {
  const params = useParams();
  const router = useRouter();
  
  const data = ipoList.find(item => item.id === params.id) || ipoList[0];

  const [expanded, setExpanded] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(`applied_${data.id}`, 'true');
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-[var(--background)]">
      <div className="mb-6 print:hidden">
        <div className="hidden md:block text-xs text-[var(--muted-foreground)] font-medium">
          Home &nbsp;&nbsp;{'>'}&nbsp;&nbsp; Market watch
        </div>
        <button 
          onClick={() => router.back()} 
          className="md:hidden flex items-center gap-1 text-[var(--secondary-foreground)] text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 mb-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => router.back()} 
            className="hidden md:flex p-2 border border-[var(--border)] rounded-xl shrink-0 print:hidden hover:bg-[var(--secondary)]"
          >
            <ArrowLeft className="w-[18px] h-[18px] text-[var(--secondary-foreground)]" />
          </button>
          <div className="relative w-10 h-10 md:w-14 md:h-14 shrink-0">
            <Image 
              src={data.logo} 
              alt={`${data.name} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-lg md:text-2xl font-extrabold text-[var(--foreground)] leading-tight">{data.name}</h1>
            <p className="text-[var(--muted-foreground)] text-[10px] md:text-sm font-medium">{data.companyName}</p>
          </div>
        </div>
        
        <div className="flex gap-2 shrink-0 print:hidden">
          <button onClick={handleDownload} className="p-2.5 md:p-3.5 border border-[var(--border)] rounded-xl hover:bg-[var(--secondary)]">
            <Download className="w-5 h-5 text-orange-500" />
          </button>
          <button 
            onClick={handleApply}
            disabled={applied}
            className={`${applied ? 'bg-green-600' : 'bg-[var(--primary)]'} text-[var(--primary-foreground)] px-5 md:px-14 py-2.5 md:py-4 rounded-xl font-bold text-xs md:text-sm transition-colors flex items-center gap-2 hover:bg-[var(--primary)]/90`}
          >
            {applied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Applied</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Apply now</span>
                <span className="sm:hidden">Apply</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="border border-[var(--border)] rounded-3xl p-5 md:p-8 mb-6 shadow-sm bg-[var(--card)]">
        <h2 className="font-bold text-lg mb-6 text-[var(--foreground)]">IPO details</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 border border-[var(--muted)] rounded-2xl p-5 md:p-6 bg-[var(--secondary)]">
          <InfoBox label="Issue size" value={data.issueSize} />
          <InfoBox label="Price range" value={data.priceRange} />
          <InfoBox label="Minimum amount" value={data.minInvest} />
          <InfoBox label="Lot size" value={data.minQty} />
          <InfoBox label="Issue dates" value={data.date} />
          <InfoBox label="Listed on" value={data.listedOn} />
          <InfoBox label="Listed price" value={data.listedPrice} />
          <InfoBox label="Listing gains" value={data.listingGains} extra={`(${data.listingGainsPercent})`} />
        </div>
      </div>

      <div className="border border-[var(--border)] rounded-3xl p-5 md:p-8 mb-6 shadow-sm bg-[var(--card)] break-inside-avoid">
        <h2 className="font-bold text-lg mb-8 text-[var(--foreground)]">IPO timeline</h2>
        
        <div className="hidden lg:block relative px-10 mb-4">
          <div className="absolute top-[15px] left-20 right-20 h-[3px] bg-green-500"></div>
          <div className="flex justify-between relative z-10">
            {data.timeline?.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mb-4 border-4 border-white">
                  <Check className="w-3 h-3" />
                </div>
                <p className="font-bold text-[11px] text-[var(--foreground)] text-center max-w-[80px] mb-1">{item.step}</p>
                <p className="text-[10px] text-[var(--muted-foreground)] font-bold">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden flex flex-col">
          {data.timeline?.map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white border-4 border-white shadow-sm shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                {i !== (data.timeline?.length - 1) && <div className="w-[3px] h-12 bg-green-500"></div>}
              </div>
              <div className="pt-0.5">
                <p className="font-bold text-sm text-[var(--foreground)]">{item.step}</p>
                <p className="text-[11px] text-[var(--muted-foreground)] font-bold mb-6">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[var(--border)] rounded-3xl p-5 md:p-8 shadow-sm bg-[var(--card)]">
        <h2 className="font-bold text-lg mb-4 text-[var(--foreground)]">About the company</h2>
        <div className="text-[var(--secondary-foreground)] text-sm leading-7 font-medium">
          <p className={expanded ? "" : "line-clamp-2 print:line-clamp-none"}>
            {data.description}
          </p>
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-orange-500 font-bold mt-2 hover:underline print:hidden"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ label, value, extra }: { label: string, value: string, extra?: string }) {
  return (
    <div>
      <p className="text-[var(--muted-foreground)] text-[10px] uppercase font-extrabold tracking-widest mb-1">{label}</p>
      <p className="font-bold text-[var(--foreground)] text-[14px] md:text-[15px]">
        {value} {extra && <span className="text-red-400 font-semibold text-xs ml-0.5">{extra}</span>}
      </p>
    </div>
  );
}
