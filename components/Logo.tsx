import Image from "next/image";
import { asset } from "@/lib/site";

// Logo oficial em /public/logo. variant "light" é para fundos verdes (footer).
export default function Logo({
  variant = "default",
  className = "h-11 w-auto",
  preload = false,
}: {
  variant?: "default" | "light";
  className?: string;
  preload?: boolean;
}) {
  return (
    <Image
      src={asset(variant === "light" ? "/logo/logo-light.svg" : "/logo/logo.svg")}
      alt="Village Market"
      width={171}
      height={56}
      preload={preload}
      className={className}
    />
  );
}
