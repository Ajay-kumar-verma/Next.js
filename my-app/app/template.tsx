import Navbar from "@/component/Navbar";
import "./globals.css";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
}

// re-render each used for animation
