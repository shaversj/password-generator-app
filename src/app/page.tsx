"use client";

import CheckedSVG from "@/components/CheckedSVG";
import IconArrowRightSVG from "@/components/IconArrowRightSVG";
import IconCopySVG from "@/components/IconCopySVG";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState([0, 10]);
  const [password, setPassword] = useState("");

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
    const selectedCriteria = passwordCriteria.filter((criteria) => formData.get(criteria.name));
    let criteria = selectedCriteria.map((data) => passwordOptions[data.name as keyof typeof passwordOptions]).join("");
    if (criteria === "") {
      alert("Please select at least one criteria");
      return;
    }

    setPassword(generatePassword(criteria, passwordLength[1]));
  }

  return (
    <main className="w-[540px]">
      <h1 className={"text-grey text-center text-[24px] leading-[43px]"}>Password Generator</h1>
      <div className={"bg-dark-grey text-almost-white mt-[31px] flex h-[80px] items-center px-8 py-[19px] text-[32px]"}>
        {password} <IconCopySVG className={"ml-auto"} />{" "}
      </div>

      <form className={"bg-dark-grey mt-6 p-8"} onSubmit={(e) => handleSubmit(e)}>
        <div className={"flex flex-col"}>
          <label className={"text-almost-white flex items-center text-[18px] leading-[23px]"} htmlFor={"range-slider"}>
            Character Length <span className={"text-neon-green ml-auto text-[32px] leading-[43px]"}>{passwordLength[1]}</span>
          </label>
          {/*<input onChange={(e) => onChangeHandler(e)} className={"mt-4"} type={"range"} name={"length"} min={0} max={20} step={1} />*/}
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

        <div className={"space-y-5 pt-8"}>
          {passwordCriteria.map((criteria) => (
            <div key={criteria.name} className={"flex items-center"}>
              <input
                className={"border-almost-white checked:bg-neon-green peer h-[1.25rem] w-[1.25rem] appearance-none border-2"}
                type={"checkbox"}
                name={criteria.name}
                value={criteria.name}
              />
              <CheckedSVG className={"pointer-events-none absolute hidden h-[1.25rem] w-[1.25rem] peer-checked:block"} />
              <label className={"text-almost-white pl-6 text-[18px] font-semibold leading-[23px]"} htmlFor={criteria.name}>
                {criteria.displayName}
              </label>
            </div>
          ))}
        </div>

        <button
          type={"submit"}
          className={"text-dark-grey bg-neon-green mt-8 flex h-[65px] w-full items-center justify-center gap-x-6 text-[18px] font-semibold leading-[23px]"}
        >
          GENERATE <IconArrowRightSVG className={""} />
        </button>
      </form>
    </main>
  );
}
