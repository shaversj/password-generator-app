import { passwordCriteria } from "@/constants/constants";
import CheckedSVG from "@/components/CheckedSVG";

export default function PasswordCriteriaList() {
  return (
    <div className={"space-y-4 pt-9 md:space-y-5"}>
      {passwordCriteria.map((criteria) => (
        <div key={criteria.name} className={"flex items-center"}>
          <input
            className={"border-almost-white checked:bg-neon-green hover:border-neon-green peer h-[1.25rem] w-[1.25rem] appearance-none border-2"}
            type={"checkbox"}
            name={criteria.name}
            value={criteria.name}
          />
          <CheckedSVG className={"pointer-events-none absolute hidden h-[1.25rem] w-[1.25rem] peer-checked:block"} />
          <label className={"text-almost-white pl-6 text-[.97rem] font-semibold leading-[1.438rem] md:text-[1.125rem]"} htmlFor={criteria.name}>
            {criteria.displayName}
          </label>
        </div>
      ))}
    </div>
  );
}
