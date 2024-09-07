"use client";
import { useState, useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function WalletBtn() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            {isClient && (
                <WalletMultiButton style={{ backgroundColor: "rgba(40, 40, 40, .4)", backdropFilter: "blur(4px)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, .1)" }} />
            )}
        </>
    )
}