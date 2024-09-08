type ButtonVariant = "primary" | "secondary";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "text-dark-grey bg-neon-green mt-8 flex h-[4.063rem] w-full items-center justify-center gap-x-6 text-[1.125rem] font-semibold leading-[1.438rem]",
  secondary: "ml-auto",
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
