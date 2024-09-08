export default function Header({ children }: { children?: React.ReactNode }) {
  return <h1 className={"text-grey text-center text-[1rem] leading-[2.688rem] md:text-[1.5rem]"}>{children}</h1>;
}
