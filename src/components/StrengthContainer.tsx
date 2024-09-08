export default function StrengthContainer({ children }: { children?: React.ReactNode }) {
  return (
    <div className={"bg-very-dark-grey my-8 flex h-[4.5rem] items-center px-8"}>
      <span className={"text-grey text-[.97rem] font-semibold uppercase leading-[1.438rem] md:text-[1.125rem]"}>Strength</span>
      {children}
    </div>
  );
}
