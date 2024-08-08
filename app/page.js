import Top from "@/components/Home/top";
import Navbar from "@/components/Navbar/navbar";
import Middle from "@/components/Home/middle";
import TryMiddle from "@/components/Home/trymiddle";
import Bottom from "@/components/Home/bottom";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
      <Navbar>
        <Top />
        <Middle />
        <TryMiddle />
        <Bottom />
        <Footer />
      </Navbar>
  );
}
