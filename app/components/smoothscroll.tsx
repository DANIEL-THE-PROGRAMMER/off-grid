"use client";

import ReactLenis from "lenis/react";

export const SmoothScrollbar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <ReactLenis root options={{}}>{children}</ReactLenis>
    </>
  );
};
