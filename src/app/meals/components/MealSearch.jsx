"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealSearch() {
  const [searchMeals, setSearchMeals] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const searchQuery = { searchMeals };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParam}`;
    router.push(url);
  }, [searchMeals]);
  return (
    <div>
      <form className="text-center">
        <input
          type="text"
          value={searchMeals}
          onChange={(e) => setSearchMeals(e.target.value)}
          className="border border-red-600"
        />
      </form>
    </div>
  );
}
