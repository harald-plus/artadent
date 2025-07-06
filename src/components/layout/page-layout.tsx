import { getSiteSettings } from "@/lib/markdown";
import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
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
export function getPageImages() {
  const settings = getSiteSettings();
  return settings.images;
}