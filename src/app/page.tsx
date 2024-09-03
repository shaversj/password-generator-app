import CheckedSVG from "@/components/CheckedSVG";

export default function Home() {
  const passwordCriteria = [
    {
      key: "uppercase",
      displayName: "Include Uppercase Letters",
    },
    {
      key: "lowercase",
      displayName: "Include Lowercase Letters",
    },
    {
      key: "numbers",
      displayName: "Include Numbers",
    },
    {
      key: "symbols",
      displayName: "Include Symbols",
    },
  ];

  return (
    <main className="">
      <h1 className={"text-almost-white text-[32px] leading-[43px]"}>Password Generator</h1>
      <div>{/* Display Password*/}</div>

      <form>
        <div className={"flex flex-col"}>
          <label className={"text-almost-white flex items-center text-[18px] leading-[23px]"} htmlFor={"length"}>
            Character Length <span className={"text-neon-green ml-auto text-[32px] leading-[43px]"}>10</span>
          </label>
          <input className={"mt-4"} type={"range"} name={"length"} min={0} max={20} />
        </div>

        <div className={"space-y-5 pt-8"}>
          {passwordCriteria.map((criteria) => (
            <div key={criteria.key} className={"flex items-center"}>
              <input className={"border-almost-white checked:bg-neon-green peer h-[1.25rem] w-[1.25rem] appearance-none border-2"} type={"checkbox"} name={criteria.key} />
              <CheckedSVG className={"pointer-events-none absolute hidden h-[1.25rem] w-[1.25rem] peer-checked:block"} />
              <label className={"text-almost-white pl-6 text-[18px] leading-[23px]"} htmlFor={criteria.key}>
                {criteria.displayName}
              </label>
            </div>
          ))}
        </div>
      </form>
    </main>
  );
}
