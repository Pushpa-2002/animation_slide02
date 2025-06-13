import Dream from "@/components/Dream";
import Fly from "@/components/Fly";
import Header from "@/components/header";
import Prepare from "@/components/Prepare";
import Process from "@/components/Process";
import SectionSlider from "@/components/SectionSlider";
import Success from "@/components/Success";


export default function Home() {
  return (
    <>
    <SectionSlider />
  <Header/>
    <section id="dream">
       <Dream />
    </section>
  
 <section id="prepare">
    <Prepare />
 </section>
    <section id="process">
       <Process />
    </section>
 <section id="fly"> <Fly/></section>
 <section id="success">
  <Success/>
 </section>

    </>
  );
}
