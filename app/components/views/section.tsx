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
        className="md:p-[214px] p-[20px] md:pt-[200px] pt-[100px] md:px-[150px] px-[20px] gradient1 relative z-0 "
      >
        {children}
      </div>
    </>
  );
};
