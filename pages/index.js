import SimpleLayout from "@/components/SimpleLayout";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";

export default function Home() {
  return (
    <SimpleLayout>
      <Hero/>
      <Feature/>
            <h1 className="sr-only">Learn Programming with UCP</h1>

    </SimpleLayout>
  );
}
