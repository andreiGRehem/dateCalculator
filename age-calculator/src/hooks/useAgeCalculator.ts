import { useState } from "react";

export function useAgeCalculator() {
  const [years, setYears] = useState<number | null>(null);
  const [months, setMonths] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);

  function calculateAge(day: number, month: number, year: number) {
    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() + 1 - month;
    let ageDays = today.getDate() - day;

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setYears(ageYears);
    setMonths(ageMonths);
    setDays(ageDays);
  }

  return { years, months, days, calculateAge };
}