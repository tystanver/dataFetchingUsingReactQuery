import Image from "next/image";
import { Inter } from "next/font/google";
import { QueryClientProvider, QueryClient } from "react-query";
import LandingLayout from "@/components/layout/LandingLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      
    </main>
  );
}
Home.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
