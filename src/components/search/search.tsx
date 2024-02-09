"use client";

import { ChangeEvent, useTransition } from "react";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  placeholder: string;
}

export const Search = ({ placeholder }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, setTransition] = useTransition();

  const handleChange = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    setTransition(() => {
      router.replace(`${pathname}?${params}`);
    });
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <input
        type="text"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] px-10 text-sm"
        placeholder={placeholder}
        defaultValue={searchParams.get("query")?.toString()}
        onChange={handleChange}
      />
    </div>
  );
};
