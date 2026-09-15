"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { asset, site } from "@/lib/site";

// Imagem do hero. Para usar o render 3D, substitua /public/images/hero-container.webp (mesma proporção 16:13).
export default function HeroRender({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`overflow-hidden rounded-3xl shadow-lift ${className}`}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Image
        src={asset(site.hero.image)}
        alt="Vilagge Market em container com fachada em vidro, pergolado de madeira e paisagismo"
        width={1600}
        height={1300}
        sizes="(min-width: 1024px) 55vw, 100vw"
        preload
        className="h-auto w-full"
      />
    </motion.div>
  );
}
