import { getSiteSettings } from "@/lib/markdown";
import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
  page?: 'homepage' | 'solheim' | 'paradis' | 'treatments' | 'about' | 'contact' | 'refund';
}

export function PageLayout({ children, page = 'homepage' }: PageLayoutProps) {
  const settings = getSiteSettings();
  
  return (
    <div className="min-h-screen bg-white">
      <Header logoSrc={settings.images.logo} />
      {children}
      <Footer logoSrc={settings.images.logo} />
    </div>
  );
}

// Export the site settings for use in pages
export function getPageImages(page: string) {
  const settings = getSiteSettings();
  return settings.images;
}