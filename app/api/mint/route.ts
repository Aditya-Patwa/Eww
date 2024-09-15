import { NextResponse, NextRequest } from "next/server";
import { PinataSDK } from "pinata-web3";

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const file: File = data.get("file") as unknown as File;
        const name = data.get("name");
        const description = data.get("description");

        // data.append("file", file);
        // data.append("pinataMetadata", JSON.stringify({ name: data.get("name") }));

        const pinata = new PinataSDK({
            pinataJwt: process.env.PINATA_JWT!,
            pinataGateway: "maroon-adorable-pigeon-905.mypinata.cloud",
        });

        const image = await pinata.upload.file(file);
        const imgUrl = `https://maroon-adorable-pigeon-905.mypinata.cloud/ipfs/${image.IpfsHash}?pinataGatewayToken=NnItNkfvedyZNe_9as97Rlk5wte5vqpc4ZtU1FTEg1FYSf6pyWbxgdwk9RjEUWv7`;

        const json = await pinata.upload.json({
            name: name,
            description: description,
            image: imgUrl,
            external_url: "https://ewwverse.vercel.app",
            properties: {
                files: [
                  {
                    uri: imgUrl,
                    type: 'image/jpeg',
                  },
                ],
                category: 'image',
            }
        }).addMetadata({ name: name as string });

        const metadata = `https://maroon-adorable-pigeon-905.mypinata.cloud/ipfs/${json.IpfsHash}?pinataGatewayToken=NnItNkfvedyZNe_9as97Rlk5wte5vqpc4ZtU1FTEg1FYSf6pyWbxgdwk9RjEUWv7`;

        console.log(metadata);

        return NextResponse.json({ metadata }, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}