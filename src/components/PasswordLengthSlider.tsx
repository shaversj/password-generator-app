import RangeSlider from "react-range-slider-input";

export default function PasswordLengthSlider({
  passwordLength,
  setPasswordLength,
}: {
  passwordLength: [number, number];
  setPasswordLength: (value: [number, number]) => void;
}) {
  return (
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
  );
}
