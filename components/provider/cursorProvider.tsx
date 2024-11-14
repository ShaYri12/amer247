"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200,
      once: true,
    });
  }, []);
  return (
    <>
      <Cursor color="#FF512F" size="lg" hasDot />

      {children}
    </>
  );
}
