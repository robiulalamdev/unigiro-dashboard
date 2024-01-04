import Image from "next/image";
import { Manrope } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  const { pathname, push } = useRouter();
  // console.log(pathname);
  useEffect(() => {
    if (pathname === "/") {
      push("/overview");
    }
  }, [pathname]);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${manrope.className}`}
    ></main>
  );
}
