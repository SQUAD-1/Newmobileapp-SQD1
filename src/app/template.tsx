"use client";

import { FcLogoMobile } from "@/assets";
import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { LoginMobile, Logo } from "@/screens/login/styles";
import { useApp } from "@/utils";
import Image from "next/image";
import { ReactNode, useDebugValue, useEffect, useState } from "react";
import { useIsClient } from "usehooks-ts";

export default function Template({ children }: { children: ReactNode }) {
	const { isClientMediumMobile, isClientMobile, isClientSmallMobile } =
		useApp();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(isClientMediumMobile || isClientMobile || isClientSmallMobile);
	}, [isClientMediumMobile, isClientMobile, isClientSmallMobile]);

	const isClient = useIsClient();
	useDebugValue(isMobile);

	if (!isMobile && isClient) {
		return <NoMobileDevice />;
	} else if (isClient) {
		<LoginMobile>
			<Logo>
				<FcLogoMobile />
			</Logo>
		</LoginMobile>;
	}

	return <div>{children}</div>;
}
