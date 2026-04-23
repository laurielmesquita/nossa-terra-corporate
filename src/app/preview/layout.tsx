import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="bg-background min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
