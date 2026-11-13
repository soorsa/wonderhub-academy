import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={``}>
      <Navbar />
      {children}
      <div className="px-1 sm:px-4">
        <Footer />
      </div>
    </div>
  );
}
