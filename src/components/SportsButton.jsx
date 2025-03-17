"use client";

import Link from "next/link";
import clsx from "clsx";

export default function SportsButton({
  href = "/coming",
  children,
  className,
  ...props
}) {
  return (
    <Link
      href={href}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        bg-gradient-to-b
        from-[#db2e20]
        to-[#f20165]
        rounded-md
        shadow-[0_4px_9px_1px_rgba(242,1,101,0.41)]
        px-4
        py-2
        text-[13px]
        font-medium
        tracking-[0.2px]
        whitespace-nowrap
        cursor-pointer
        transition-colors
        duration-200
        ease-in-out
        opacity-90
        hover:opacity-100
        text-white
        `,
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

// w-[123.20px]
// h-[34.68px]