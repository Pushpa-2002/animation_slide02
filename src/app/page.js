import Dream from "@/components/Dream";
import Fly from "@/components/Fly";
import Header from "@/components/header";
import Prepare from "@/components/Prepare";
import Process from "@/components/Process";
import Success from "@/components/Success";


export default function Home() {
  return (
    <>
    <Header/>
  <Dream />
  <Prepare />
  <Process />
  <Fly/>
<Success/>
    </>
  );
}
