import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, divider } from "@nextui-org/react";
import Billboard from "./billboard/billboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"font-martel"}>
      <Billboard />
    </div>
  );
}
