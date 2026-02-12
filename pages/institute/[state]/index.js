import { useRouter } from "next/router";
import { states } from "@/data/states";
import Link from "next/link";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";
import BackButton from "@/components/BackButton";

export default function StatePage() {
  const router = useRouter();
  const { state } = router.query;

  if (!state) return <div className="p-10 text-center">Loading...</div>;

  const stateData = states.find((s) => s.slug === state);

  if (!stateData)
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        State Not Found
      </div>
    );

  return (
    <>
      <Head>
        <title>{stateData.name} Computer Institutes | CodeSkipper</title>
        <meta
          name="description"
          content={`Find city wise computer institutes in ${stateData.name}. Explore top training centers and professional courses.`}
        />
      </Head>

      <SimpleLayout>
        {/* Back Button */}
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-10 rounded-xl shadow-lg mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Computer Institutes in {stateData.name}
          </h1>
          <p className="text-lg opacity-90">
            Browse city-wise computer training institutes across{" "}
            {stateData.name}. Find the best institute for your career growth.
          </p>

          <div className="mt-4 text-sm bg-white/20 inline-block px-4 py-2 rounded-full">
            {stateData.cities.length} Cities Available
          </div>
        </section>

        {/* Cities Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Select Your City
          </h2>

          {stateData.cities.length === 0 ? (
            <div className="text-gray-500 text-lg">
              No cities found in this state.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stateData.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/institute/${state}/${city.slug}`}
                >
                  <div className="bg-white shadow-md rounded-xl p-6 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition transform duration-300 border border-gray-100">
                    <h3 className="text-xl font-semibold text-indigo-600">
                      {city.name}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      Explore institutes in {city.name}
                    </p>

                    <div className="mt-4 text-sm text-blue-600 font-medium">
                      View Institutes →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-blue-600 text-white rounded-xl py-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Own an Institute in {stateData.name}?
          </h2>
          <p className="mb-6">
            List your computer institute and connect with thousands of students.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Add Your Institute
          </button>
        </section>
      </SimpleLayout>
    </>
  );
}
