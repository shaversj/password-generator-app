type ButtonVariant = "primary" | "secondary";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "text-dark-grey hover:bg-dark-grey hover:border-neon-green hover:border group hover:text-neon-green bg-neon-green mt-8 flex h-[4.063rem] w-full items-center justify-center gap-x-6 text-[1.125rem] font-semibold leading-[1.438rem]",
  secondary: "ml-auto flex items-center gap-x-4 text-neon-green text-[1.125rem] font-semibold leading-[1.438rem]",
};

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
  type?: ButtonType;
  variant: ButtonVariant;
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ type = "submit", variant, children, onClick }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={VARIANTS[variant]}>
      {children}
    </button>
  );
}
