import { states } from "@/data/states";
import Link from "next/link";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find Computer Institutes in India | CodeSkipper</title>
        <meta
          name="description"
          content="Explore state-wise and city-wise computer institutes across India. Find courses, trainers, contact details and more."
        />
      </Head>

      <SimpleLayout>
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl shadow-lg mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find The Best Computer Institutes in India 🇮🇳
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover state-wise and city-wise computer institutes. Compare courses,
            trainers, facilities and choose the best institute for your career.
          </p>

          <div className="mt-6">
            <Link href="#states">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                Explore States
              </button>
            </Link>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">🎓 Verified Institutes</h3>
            <p className="text-gray-600">
              We list trusted and verified computer institutes from across India.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">📚 Multiple Courses</h3>
            <p className="text-gray-600">
              From MERN Stack to Data Science, find institutes offering top courses.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">⭐ Top Rated Trainers</h3>
            <p className="text-gray-600">
              Explore experienced trainers and industry professionals.
            </p>
          </div>
        </section>

        {/* States Section */}
        <section id="states">
          <h2 className="text-3xl font-bold text-center mb-8">
            Browse Institutes by State
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {states.map((state) => (
              <Link key={state.slug} href={`/institute/${state.slug}`}>
                <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-1 transition transform duration-300">
                  <h3 className="text-xl font-semibold text-blue-600">
                    {state.name}
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Explore institutes in {state.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 bg-indigo-600 text-white rounded-xl py-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Own a Computer Institute?
          </h2>
          <p className="mb-6">
            Get your institute listed on CodeSkipper and reach thousands of students.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            List Your Institute
          </button>
        </section>
      </SimpleLayout>
    </>
  );
}
