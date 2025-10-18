import Header from "@/components/header";
import CursorSpotlight from "@/components/cursor-spotlight";

export default function Home() {
  return (
    <>
      <CursorSpotlight />

      <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 py-1.2 md:py-16 lg:py-0 font-sans relative">
        <Header />
      </div>
    </>
  );
}
