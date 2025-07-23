import EyeGoLogo from "@/app/ui/eyego-logo";
export default function Header() {
  return (
    <header>
      <div className="relative flex h-24 shrink-0 items-end bg-primary-700 p-4 md:h-24 ">
        <div className="absolute left-1/2 top-1/2 h-[100%] w-[60%] -translate-x-1/2 -translate-y-1/2 transform skew-x-[-35deg] bg-white "></div>

        <EyeGoLogo />
      </div>
    </header>
  );
}
