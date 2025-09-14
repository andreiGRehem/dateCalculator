interface ResultProps {
  years: number | null;
  months: number | null;
  days: number | null;
}

export function Result({ years, months, days }: ResultProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 text-3xl md:text-4xl font-extrabold italic text-black">
      <div>
        <span className="text-blue-300 mr-2">{years ?? "--"}</span>Anos
      </div>
      <div>
        <span className="text-blue-500 mr-2">{months ?? "--"}</span>Meses
      </div>
      <div>
        <span className="text-blue-700 mr-2">{days ?? "--"}</span>Dias
      </div>
    </div>
  );
}