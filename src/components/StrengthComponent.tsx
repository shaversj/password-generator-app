export type strengthState = "" | "Too Weak!" | "Weak" | "Medium" | "Strong";

export default function StrengthComponent({ strengthState }: { strengthState: strengthState }) {
  const strengthVariants: Record<strengthState, string> = {
    "": "border-almost-white h-[1.75rem] w-[0.625rem] border-2",
    "Too Weak!": "h-[1.75rem] w-[0.625rem] first:bg-red first:border-none border-almost-white border-2",
    Weak: "h-[1.75rem] w-[0.625rem] [&:nth-child(-n+2)]:bg-orange [&:nth-child(-n+2)]:border-none border-almost-white border-2",
    Medium: "h-[1.75rem] w-[0.625rem] [&:nth-child(-n+3)]:bg-yellow [&:nth-child(-n+3)]:border-none border-almost-white border-2",
    Strong: "h-[1.75rem] w-[0.625rem] bg-neon-green border-none",
  };

  return (
    <div className={"ml-auto flex gap-x-[15.5px]"}>
      <span className={"text-almost-white text-[24px] font-semibold uppercase leading-[31px]"}>{strengthState}</span>
      <div className={"flex gap-x-[8.5px]"}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={strengthVariants[strengthState]}></div>
        ))}
      </div>
    </div>
  );
}
