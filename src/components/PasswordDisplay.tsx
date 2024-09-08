import Button from "@/components/Button";
import IconCopySVG from "@/components/IconCopySVG";

type PasswordDisplayProps = {
  password: string;
  onClickHandler: (params: { textToCopy: string }) => void;
  displayCopyToast?: boolean;
};

export default function PasswordDisplay({ password, onClickHandler, displayCopyToast }: PasswordDisplayProps) {
  return (
    <div className={"bg-dark-grey text-almost-white mt-5 flex h-[5rem] items-center px-4 py-5 text-[2rem] md:px-8"}>
      {password ? password : <span className={"text-[#55545c]"}>P4$5W0rD!</span>}
      <Button type={"button"} variant={"secondary"} onClick={() => onClickHandler({ textToCopy: password })}>
        {displayCopyToast ? "COPIED" : ""} <IconCopySVG />
      </Button>
    </div>
  );
}
