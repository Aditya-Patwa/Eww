"use client";
import { useContext, useState, useEffect } from "react";
import { umiContext } from "@/components/UmiContext";
import { fetchAssetsByOwner } from '@metaplex-foundation/mpl-core';
import { useWallet } from "@solana/wallet-adapter-react";
import { fromWeb3JsPublicKey } from '@metaplex-foundation/umi-web3js-adapters';

export default function Dashboard() {
    const { publicKey } = useWallet();
    const [assets, setAssets] = useState<any>(null);
    const umi = useContext(umiContext);

    useEffect(() => {
        let owner = fromWeb3JsPublicKey(publicKey!);

        const assetsByOwner = fetchAssetsByOwner(umi!, owner, {
            skipDerivePlugins: false,
        }).then((result) => {
            setAssets([...result]);
        });

    }, []);

    return (
        <>
            <main className="w-screen min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10">
                <div>
                    <h1 className="bg-clip-text py-2 text-xl font-bold leading-none tracking-tighter text-white text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                        Your Memes 😍
                    </h1>
                </div>
            </main>
        </>
    )
}