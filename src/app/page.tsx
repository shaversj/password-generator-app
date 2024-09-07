"use client";

import CheckedSVG from "@/components/CheckedSVG";
import IconArrowRightSVG from "@/components/IconArrowRightSVG";
import IconCopySVG from "@/components/IconCopySVG";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import StrengthComponent from "@/components/StrengthComponent";
import type { strengthState } from "@/components/StrengthComponent";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState([0, 0]);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<strengthState>("");

  const passwordCriteria = [
    {
      name: "uppercase",
      displayName: "Include Uppercase Letters",
      pattern: "A",
    },
    {
      name: "lowercase",
      displayName: "Include Lowercase Letters",
      pattern: "a",
    },
    {
      name: "numbers",
      displayName: "Include Numbers",
      pattern: "0",
    },
    {
      name: "symbols",
      displayName: "Include Symbols",
      pattern: "!",
    },
  ];

  const passwordOptions = {
    uppercase: "A",
    lowercase: "a",
    numbers: "0",
    symbols: "!",
  };

  function generatePassword(criteria: string, length: number) {
    let randomize = require("randomatic");
    return randomize(criteria, length);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    new Response(formData).text().then(console.log);
    const selectedCriteria = passwordCriteria.filter((criteria) => formData.get(criteria.name));
    let criteria = selectedCriteria.map((data) => passwordOptions[data.name as keyof typeof passwordOptions]).join("");

    setPassword(generatePassword(criteria, passwordLength[1]));
    setPasswordStrength(determineStrengthState(passwordLength[1], criteria.length));
  }

  const determineStrengthState = (passwordLength: number, criteriaLength: number): strengthState => {
    const strengthLevels = [
      { condition: passwordLength < 8 && criteriaLength < 1, strength: "Too Weak!" },
      { condition: passwordLength < 8 && criteriaLength < 2, strength: "Weak" },
      { condition: passwordLength < 12 && criteriaLength < 3, strength: "Medium" },
      { condition: passwordLength >= 12 && criteriaLength >= 3, strength: "Strong" },
    ];

    const { strength } = strengthLevels.find(({ condition }) => condition) || { strength: "" };
    return strength as strengthState;
  };

  return (
    <main className="w-[343px] md:w-[540px]">
      <h1 className={"text-grey text-center text-[1rem] leading-[2.688rem] md:text-[1.5rem]"}>Password Generator</h1>
      <div className={"bg-dark-grey text-almost-white mt-[1.25rem] flex h-[5rem] items-center px-4 py-[1.188rem] text-[2rem] md:px-8"}>
        {password ? password : <span className={"text-[#55545c]"}>P4$5W0rD!</span>} <IconCopySVG className={"ml-auto"} />{" "}
      </div>

      <form className={"bg-dark-grey mt-6 p-4 md:p-8"} onSubmit={(e) => handleSubmit(e)}>
        <div className={"flex flex-col gap-y-2 md:gap-y-4"}>
          <label className={"text-almost-white flex items-center text-[.97rem] font-semibold leading-[1.438rem] md:text-[1.125rem]"} htmlFor={"range-slider"}>
            Character Length <span className={"text-neon-green ml-auto text-[2rem] leading-[2.688rem]"}>{passwordLength[1]}</span>
          </label>
          <RangeSlider
            id={"range-slider"}
            value={passwordLength}
            thumbsDisabled={[false, false]}
            defaultValue={10}
            min={0}
            max={20}
            step={1}
            className={"mt-4"}
            onInput={setPasswordLength}
            rangeSlideDisabled={true}
          />
        </div>

        <div className={"space-y-4 pt-9 md:space-y-5"}>
          {passwordCriteria.map((criteria) => (
            <div key={criteria.name} className={"flex items-center"}>
              <input
                className={"border-almost-white checked:bg-neon-green peer h-[1.25rem] w-[1.25rem] appearance-none border-2"}
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

        <div className={"bg-very-dark-grey my-8 flex items-center px-8 py-5"}>
          <span className={"text-grey text-[.97rem] font-semibold uppercase leading-[1.438rem] md:text-[1.125rem]"}>Strength</span>
          <StrengthComponent strengthState={passwordStrength} />
        </div>

        <button
          type={"submit"}
          className={"text-dark-grey bg-neon-green mt-8 flex h-[4.063rem] w-full items-center justify-center gap-x-6 text-[1.125rem] font-semibold leading-[1.438rem]"}
        >
          GENERATE <IconArrowRightSVG className={""} />
        </button>
      </form>
    </main>
  );
}
