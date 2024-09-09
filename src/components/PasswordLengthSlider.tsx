import * as Slider from "@radix-ui/react-slider";

type PasswordLengthSliderProps = {
  passwordLength: number[];
  setPasswordLength: (value: number[]) => void;
};

export default function PasswordLengthSlider({ passwordLength, setPasswordLength }: PasswordLengthSliderProps) {
  const updatePasswordLengthHandler = (value: number[]) => {
    setPasswordLength(value);
  };

  return (
    <div className={"flex flex-col gap-y-2 md:gap-y-4"}>
      <label className={"text-almost-white flex items-center text-[.97rem] font-semibold leading-[1.438rem] md:text-[1.125rem]"} htmlFor={"range-slider"}>
        Character Length <span className={"text-neon-green ml-auto text-[2rem] leading-[2.688rem]"}>{passwordLength}</span>
      </label>
      <Slider.Root className="SliderRoot relative flex h-5 items-center" defaultValue={passwordLength} max={20} step={1} onValueChange={updatePasswordLengthHandler}>
        <Slider.Track className="SliderTrack bg-very-dark-grey relative h-2 grow">
          <Slider.Range className="SliderRange bg-neon-green absolute block h-2" />
        </Slider.Track>
        <Slider.Thumb
          className="SliderThumb bg-almost-white hover:bg-very-dark-grey hover:border-neon-green block h-[28px] w-[28px] rounded-full hover:border-2 focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  );
}
