import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";

export const metadata: Metadata = {
  title: "Agovino Monteforte - Studio Legale",
  description: "Studio Legale Agovino Monteforte: Avvocati esperti in diritto penale, civile, acquisizioni aziendali, compliance e consulenza legale con oltre 20 anni di esperienza.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <Navbar />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
