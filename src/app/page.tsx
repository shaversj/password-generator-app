"use client";

import IconArrowRightSVG from "@/components/IconArrowRightSVG";
import type { PasswordStrength } from "@/components/StrengthIndicator";
import StrengthIndicator from "@/components/StrengthIndicator";
import { passwordCriteria, passwordOptions } from "@/constants/constants";
import { useState } from "react";

import "react-range-slider-input/dist/style.css";
import PasswordCriteriaList from "@/components/PasswordCriteriaList";
import StrengthContainer from "@/components/StrengthContainer";
import PasswordLengthSlider from "@/components/PasswordLengthSlider";
import Button from "@/components/Button";
import Header from "@/components/Header";
import PasswordDisplay from "@/components/PasswordDisplay";

export default function Home() {
  const [passwordLength, setPasswordLength] = useState<[number, number]>([0, 0]);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>("");

  function generatePassword(criteria: string, length: number) {
    let randomize = require("randomatic");
    return randomize(criteria, length);
  }

  function handleCopyToClipboard({ textToCopy }: { textToCopy: string }) {
    if (textToCopy === "") alert("No password to copy");

    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Password copied to clipboard");
    });
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const criteria = passwordCriteria
      .filter((c) => formData.get(c.name))
      .map((c) => passwordOptions[c.name as keyof typeof passwordOptions])
      .join("");

    if (!criteria) {
      alert("Please select at least one criteria");
      return;
    }

    setPassword(generatePassword(criteria, passwordLength[1]));
    setPasswordStrength(determineStrengthState(passwordLength[1], criteria.length));
  }

  const determineStrengthState = (passwordLength: number, criteriaLength: number): PasswordStrength => {
    const strengthLevels = [
      { condition: passwordLength < 8 || criteriaLength < 2, strength: "Too Weak!" },
      { condition: passwordLength < 12 && criteriaLength >= 3, strength: "Weak" },
      { condition: passwordLength >= 12 && criteriaLength < 4, strength: "Medium" },
      { condition: passwordLength >= 12 && criteriaLength === 4, strength: "Strong" },
    ];

    const { strength } = strengthLevels.find(({ condition }) => condition) || { strength: "Too Weak!" };
    return strength as PasswordStrength;
  };

  return (
    <main className="w-[343px] md:w-[540px]">
      <Header>Password Generator</Header>
      <PasswordDisplay password={password} onClickHandler={() => handleCopyToClipboard({ textToCopy: password })} />
      <form className={"bg-dark-grey mt-6 p-4 md:p-8"} onSubmit={(e) => handleFormSubmit(e)}>
        <PasswordLengthSlider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
        <PasswordCriteriaList />
        <StrengthContainer>
          <StrengthIndicator passwordStrength={passwordStrength} />
        </StrengthContainer>
        <Button variant={"primary"}>
          GENERATE <IconArrowRightSVG />
        </Button>
      </form>
    </main>
  );
}
