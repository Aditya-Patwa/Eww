"use client"; 
import { useToast } from "@/components/hooks/use-toast";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { generateSigner } from '@metaplex-foundation/umi';
import { create } from '@metaplex-foundation/mpl-core';
import { umiContext } from "@/components/UmiContext";
import { useContext } from "react";

export default function NewNFT() {
    const { toast } = useToast();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assetUrl, setAssetUrl] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const umi = useContext(umiContext);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files) {
            setFile(e.target.files[0]);
            setAssetUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    async function mintNFT() {
        try {
            setBtnDisabled(true);
            const data = new FormData();
            data.set("file", file!);
            data.set("name", name);
            data.set("description", description);

            const res = await fetch("/api/mint", { method: "POST", body: data });
            const resData = await res.json();
    
            // const metadataUrl = resData.metadataUrl
            
            const metadata = resData.metadata;

            const assetSigner = generateSigner(umi!);

            const result = await create(umi!, {
                asset: assetSigner, 
                name: name,
                uri: metadata
            }).sendAndConfirm(umi!);

            console.log(result.signature.toString());

        } catch (e) {
            setBtnDisabled(false);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Unable to mint your meme 😭",
            });
        }
    }

    useEffect(() => {
        if(name.trim().length !== 0 && description.trim().length !== 0 && assetUrl.trim().length !== 0 && file) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [name, description, assetUrl, file]);


    return (
        <main className="w-screen min-h-screen px-4 sm:px-16 md:px-32 lg:px-40 py-10 md:py-15">
            <div>
                <h1 className="bg-clip-text py-2 mt-12 text-center text-xl font-bold leading-none tracking-tighter text-white text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                    Mint New Meme 😍
                </h1>
            </div>

            <div className="my-16 grid items-center justify-center gap-7">
                {assetUrl && (
                    <div className="grid w-full max-w-md items-center gap-3 mb-5">
                        <img src={assetUrl} alt="Your Meme Image" />
                    </div> 
                )}


                <div className="grid w-full max-w-md items-center gap-3">
                    <Label htmlFor="assetName">Name Your Meme 🥰</Label>
                    <Input type="text" id="assetName" placeholder="Name Your Meme" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="grid w-full max-w-md items-center gap-3">
                    <Label htmlFor="picture">Upload Meme</Label>
                    <Input id="picture" type="file" accept="image/*" onChange={handleChange} required />
                </div>
                <div className="grid w-full max-w-md items-center gap-3">
                    <Label htmlFor="description">Describe Your Meme 🤔</Label>
                    <Textarea placeholder="Describe Your Meme." id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="grid w-full max-w-md items-center gap-3">
                    <Button disabled={btnDisabled} onClick={mintNFT}>
                        Mint
                    </Button>
                </div>
            </div>
        </main>
    )
}