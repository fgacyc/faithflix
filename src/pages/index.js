import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, divider } from "@nextui-org/react";
import BillBoard from "./billboard/billboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <BillBoard />
    </div>
  );
}
