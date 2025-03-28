import { Inter, Nunito, Roboto_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // weight: ["400", "500", "600", "700"],
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  // weight: ["400", "500", "600", "700"],
});

export const nunito = Nunito({
  // style: "italic",
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});
