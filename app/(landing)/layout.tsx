import "./landing.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learner's Lab",
  description: "Learner's Lab by Shakil Ahmad",
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  => {
  return (
    <div className={inter.className}>
     {children}
    </div>
  )
}

export default DashboardLayout