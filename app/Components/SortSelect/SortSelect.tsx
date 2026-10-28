"use client";

import { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

const SortSelect = ({ current }: { current: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-500">সাজান</span>
      <select
        value={current}
        disabled={isPending}
        onChange={(e) =>
          startTransition(() => router.push(`${pathname}?sort=${e.target.value}`))
        }
        className="rounded-lg border bg-white px-2 py-1.5 text-sm disabled:opacity-50"
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-asc">দাম: কম থেকে বেশি</option>
        <option value="price-desc">দাম: বেশি থেকে কম</option>
        <option value="rise">সবচেয়ে বেশি বেড়েছে</option>
        <option value="fall">সবচেয়ে বেশি কমেছে</option>
      </select>
      {isPending && <span className="text-xs text-gray-500">লোড হচ্ছে...</span>}
    </div>
  );
};

export default SortSelect;