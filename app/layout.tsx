import type { Metadata } from "next";
import "./globals.css";
const deploymentHost = process.env.VERCEL_URL;
export const metadata: Metadata = {
  metadataBase: new URL(
    deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000",
  ),
  title: "Casa dos Compressores | A força que o seu trabalho precisa",
  description:
    "Compressores, ferramentas, geradores e soluções para oficinas, indústria, construção e campo em Feira de Santana, Bahia. Conheça a Casa dos Compressores.",
  robots: { index: false, follow: false },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  openGraph: {
    title: "Casa dos Compressores",
    description:
      "Seu trabalho não para. A nossa força também não. Equipamentos, ferramentas e soluções em Feira de Santana.",
    locale: "pt_BR",
    type: "website",
    siteName: "Casa dos Compressores",
    images: [
      {
        url: "/images/logo.png",
        width: 518,
        height: 390,
        alt: "Casa dos Compressores — a solução que você precisa",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Casa dos Compressores",
    description: "Equipamentos, ferramentas e soluções em Feira de Santana.",
    images: ["/images/logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
