import Header from "../header/header";
import Image from "next/image";

export default function BillBoard() {
  return (
    <div>
      <Header className="fixed top-0 w-full py-2" />
      <Image
        src="/images/There_is_ a_miracle.jpg"
        alt="logo"
        width={1920}
        height={1080}
        quality={100}
        className="object-cover max-h-[100vh]"
      />
    </div>
  );
}
