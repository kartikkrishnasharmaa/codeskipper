import { institutes } from "@/data/institutes";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";
import BackButton from "@/components/BackButton";

export default function InstitutePage({ data }) {
  if (!data) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Institute Not Found
      </div>
    );
  }

  const siteUrl = "https://codeskipper.in"; // change to real domain
  const fullUrl = `${siteUrl}/institute/${data.state}/${data.city}/${data.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: data.name,
    url: fullUrl,
    logo: `${siteUrl}${data.logo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      addressRegion: data.state,
      streetAddress: data.address,
      addressCountry: "India",
    },
    sameAs: [
      data.social?.website,
      data.social?.facebook,
      data.social?.instagram,
    ].filter(Boolean),
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>{data.name} | Best Computer Institute in {data.city}</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={fullUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={`${siteUrl}${data.logo}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.name} />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={`${siteUrl}${data.logo}`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <SimpleLayout>
        <BackButton />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-10 rounded-xl shadow-lg mb-10 relative">
          {data.promoted && (
            <span className="absolute top-4 right-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold text-black">
              ⭐ Sponsored
            </span>
          )}

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={data.logo}
              alt={data.name}
              className="w-28 h-28 object-contain bg-white rounded-xl p-3"
            />

            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {data.name}
              </h1>
              <p className="mt-2 opacity-90">{data.address}</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white shadow-md rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">About Institute</h2>
          <p className="text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </section>
          
        {/* Courses */}
        <section className="bg-white shadow-md rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">Courses Offered</h2>
          <div className="flex flex-wrap gap-3">
            {data.courses.map((c, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Trainers */}
        {data.trainers && (
          <section className="bg-white shadow-md rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Our Trainers</h2>
            <ul className="space-y-2">
              {data.trainers.map((trainer, i) => (
                <li
                  key={i}
                  className="bg-gray-100 px-4 py-2 rounded-lg"
                >
                  👨‍🏫 {trainer}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Social */}
        {data.social && (
          <section className="bg-white shadow-md rounded-xl p-8 mb-10">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <div className="flex gap-4 flex-wrap">
              {data.social.website && (
                <a
                  href={data.social.website}
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  🌐 Website
                </a>
              )}
              {data.social.facebook && (
                <a
                  href={data.social.facebook}
                  target="_blank"
                  className="bg-blue-800 text-white px-4 py-2 rounded-lg"
                >
                  👍 Facebook
                </a>
              )}
              {data.social.instagram && (
                <a
                  href={data.social.instagram}
                  target="_blank"
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg"
                >
                  📸 Instagram
                </a>
              )}
            </div>
          </section>
        )}
      </SimpleLayout>
    </>
  );
}

/* ============================= */
/* ===== STATIC GENERATION ===== */
/* ============================= */

export async function getStaticPaths() {
  const paths = institutes.map((inst) => ({
    params: {
      state: inst.state,
      city: inst.city,
      institute: inst.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking", // good for large data
  };
}

export async function getStaticProps({ params }) {
  const data = institutes.find(
    (i) =>
      i.slug === params.institute &&
      i.state === params.state &&
      i.city === params.city
  );

  if (!data) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
    revalidate: 60, // ISR (update every 60 seconds)
  };
}
