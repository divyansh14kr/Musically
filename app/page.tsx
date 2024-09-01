import Image from "next/image";
import NextAuth from "next-auth"
import { Appbar } from "./components/Appbar";


export default function Home() {
  return (
    <main >
      <Appbar></Appbar>
    </main>
  );
}
