"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";

export const Section = ({ children }: { children: React.ReactNode }) => {
  const [marginTop, setMarginTop] = useState<number | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if(ref.current){
        let height = ref.current.getBoundingClientRect().height
        console.log(height)
        setMarginTop(Math.ceil(height))
    }
  }, []); 

  console.log(marginTop);

  return (
    <>
      <div
        ref={ref}
        className="p-[214px] pt-[200px] px-[150px] gradient1 relative z-0"
      >
        {children}
      </div>
    </>
  );
};
