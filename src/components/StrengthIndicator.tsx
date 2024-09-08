export type PasswordStrength = "" | "Too Weak!" | "Weak" | "Medium" | "Strong";

const VARIANTS: Record<PasswordStrength, string> = {
  "": "border-almost-white h-7 w-2.5 border-2",
  "Too Weak!": "h-7 w-2.5 first:bg-red first:border-none border-almost-white border-2",
  Weak: "h-7 w-2.5 [&:nth-child(-n+2)]:bg-orange [&:nth-child(-n+2)]:border-none border-almost-white border-2",
  Medium: "h-7 w-2.5 [&:nth-child(-n+3)]:bg-yellow [&:nth-child(-n+3)]:border-none border-almost-white border-2",
  Strong: "h-7 w-2.5 bg-neon-green border-none",
};

export default function StrengthIndicator({ passwordStrength }: { passwordStrength: PasswordStrength }) {
  return (
    <div className="flex h-full w-full items-center justify-end gap-x-4">
      <span className="text-almost-white text-[1.188rem] font-semibold uppercase leading-8 md:text-2xl">{passwordStrength}</span>
      <div className="flex gap-x-2">
        {[...Array(4)].map((_, index) => (
          <div key={index} className={VARIANTS[passwordStrength]}></div>
        ))}
      </div>
    </div>
  );
}
