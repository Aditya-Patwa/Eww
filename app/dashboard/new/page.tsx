"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewNFT() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assetUrl, setAssetUrl] = useState("");


    function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("h");
        if(e.target.files) {
            setAssetUrl(URL.createObjectURL(e.target.files[0]));
        }
    }


    return (
        <main className="w-screen min-h-screen px-4 sm:px-16 md:px-32 lg:px-40 py-10 md:py-15">
            <div>
                <h1 className="bg-clip-text py-2 text-center text-xl font-bold leading-none tracking-tighter text-white text-balance sm:text-2xl md:text-3xl lg:text-4xl">
                    Mint New Meme 😍
                </h1>
            </div>

            <div className="my-16 grid items-center justify-center gap-7">
                {assetUrl && (
                    <div className="grid w-full max-w-sm items-center gap-3 mb-5">
                        <img src={assetUrl} alt="Your Meme Image" />
                    </div> 
                )}


                <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="assetName">Name Your Meme 🥰</Label>
                    <Input type="text" id="assetName" placeholder="Name Your Meme" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="picture">Upload Meme</Label>
                    <Input id="picture" type="file" accept="image/*" onChange={handleUpload} required />
                </div>
                <div className="grid w-full max-w-sm items-center gap-3">
                    <Label htmlFor="description">Describe Your Meme 🤔</Label>
                    <Textarea placeholder="Describe Your Meme." id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
        </main>
    )
}