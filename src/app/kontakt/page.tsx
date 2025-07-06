import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "./contact-form";
import { getServices } from "@/lib/markdown";

export default function ContactPage() {
  const services = getServices();
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm services={services} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}