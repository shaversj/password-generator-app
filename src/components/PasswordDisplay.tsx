import Button from "@/components/Button";
import IconCopySVG from "@/components/IconCopySVG";

type PasswordDisplayProps = {
  password: string;
  onClickHandler: (params: { textToCopy: string }) => void;
  displayCopyToast?: boolean;
};

export default function PasswordDisplay({ password, onClickHandler, displayCopyToast }: PasswordDisplayProps) {
  return (
    <div className={"bg-dark-grey text-almost-white mt-5 flex h-[5rem] items-center px-4 text-2xl leading-[1.938rem] md:px-8 md:text-[2rem] md:leading-[2.688rem]"}>
      {password ? password : <span className={"text-[#55545c]"}>P4$5W0rD!</span>}
      <Button type={"button"} variant={"secondary"} onClick={() => onClickHandler({ textToCopy: password })}>
        {displayCopyToast ? <span className={"hidden md:block"}>COPIED</span> : ""} <IconCopySVG />
      </Button>
    </div>
  );
}
