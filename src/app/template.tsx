"use client";

import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { useApp } from "@/utils";
import { ReactNode, useDebugValue, useEffect, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const { isClientMediumMobile, isClientMobile, isClientSmallMobile } = useApp();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isClientMediumMobile || isClientMobile || isClientSmallMobile);
  }, [isClientMediumMobile, isClientMobile, isClientSmallMobile]);

  useDebugValue(isMobile);

  if (!isMobile) return <NoMobileDevice />;

  return <div>{children}</div>;
}
