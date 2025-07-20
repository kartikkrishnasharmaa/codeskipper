import SimpleLayout from "@/components/SimpleLayout";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Mcq from "@/components/Mcq";

export default function Home() {
  return (
    <SimpleLayout>
      <Hero/>
      <Feature/>
      <Mcq/>
    </SimpleLayout>
  );
}
