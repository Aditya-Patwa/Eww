import { createContext } from "react";
import { Umi } from "@metaplex-foundation/umi";

export const umiContext = createContext<Umi | null>(null);