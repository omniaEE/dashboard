import { EyeIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function EyeGoLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none text-white `}
    >
      <Image
        src="/cropped-eyego-logo-png-1-1.webp"
        alt="eyeGo logo"
        width={50}
        height={57}
      />

      <p className=" text-sm font-semibold"> Dashboard</p>
    </div>
  );
}
