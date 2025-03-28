import type { Metadata } from "next";
import { nunito } from "@/fonts";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

export const metadata: Metadata = {
  title: "Маркет АйОу",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <main className="min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
