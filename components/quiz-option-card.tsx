"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface QuizOptionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}

export function QuizOptionCard({
  title,
  description,
  imageSrc,
  onClick,
}: QuizOptionCardProps) {
  return (
    <Card
      onClick={onClick}
      className="group bg-white/80 backdrop-blur-sm border-0 shadow-2xl relative p-6 cursor-pointer transition-all hover:scale-[1.02] flex flex-col items-center text-center overflow-hidden"
    >
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glass Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        <div className="relative w-48 h-48 mb-6 transition-transform duration-300 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-lg" />
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300 group-hover:text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>

      
    </Card>
  );
}
