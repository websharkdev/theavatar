import { Header } from "@/components/custom";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Avatar Factory",
  description: "This is technical assignment by Oleksii Bortnytskyi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} flex min-h-screen flex-col relative`}
      >
        <Header menu={["Why Us", "Digital workers", "Contact"]} />
        <div>{children}</div>
      </body>
    </html>
  );
}
