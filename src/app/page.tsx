"use client";

import CheckedSVG from "@/components/CheckedSVG";
import IconArrowRightSVG from "@/components/IconArrowRightSVG";
import IconCopySVG from "@/components/IconCopySVG";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState(0);

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // read form data
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const length = formData.get("length");
    const criteria = passwordCriteria.filter((criteria) => formData.get(criteria.key));
    console.log({ length, criteria });
  }

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(e.currentTarget.value));
  }

  return (
    <main className="w-[540px]">
      <h1 className={"text-grey text-center text-[24px] leading-[43px]"}>Password Generator</h1>
      <div className={"bg-dark-grey text-almost-white mt-[31px] flex h-[80px] items-center px-8 py-[19px] text-[32px]"}>
        PTx1f5DaFX <IconCopySVG className={"ml-auto"} />{" "}
      </div>

      <form className={"bg-dark-grey mt-6 p-8"} onSubmit={(e) => handleSubmit(e)}>
        <div className={"flex flex-col"}>
          <label className={"text-almost-white flex items-center text-[18px] leading-[23px]"} htmlFor={"length"}>
            Character Length <span className={"text-neon-green ml-auto text-[32px] leading-[43px]"}>{passwordLength}</span>
          </label>
          {/*<input onChange={(e) => onChangeHandler(e)} className={"mt-4"} type={"range"} name={"length"} min={0} max={20} step={1} />*/}
          <RangeSlider
            id={"range-slider"}
            value={passwordLength}
            thumbsDisabled={[false, false]}
            defaultValue={[0, 0]}
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
            <div key={criteria.key} className={"flex items-center"}>
              <input className={"border-almost-white checked:bg-neon-green peer h-[1.25rem] w-[1.25rem] appearance-none border-2"} type={"checkbox"} name={criteria.key} />
              <CheckedSVG className={"pointer-events-none absolute hidden h-[1.25rem] w-[1.25rem] peer-checked:block"} />
              <label className={"text-almost-white pl-6 text-[18px] font-semibold leading-[23px]"} htmlFor={criteria.key}>
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
