import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { institutes } from "@/data/institutes";
import Link from "next/link";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";
import BackButton from "@/components/BackButton";

const ITEMS_PER_PAGE = 6;

export default function CityPage() {
  const router = useRouter();
  const { state, city } = router.query;

  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  if (!state || !city)
    return <div className="p-10 text-center">Loading...</div>;

  const cityInstitutes = institutes.filter(
    (inst) => inst.state === state && inst.city === city
  );

  const allCourses = [
    ...new Set(cityInstitutes.flatMap((inst) => inst.courses))
  ];

  const processedData = useMemo(() => {
    let filtered = cityInstitutes.filter((inst) => {
      const matchSearch = inst.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCourse = courseFilter
        ? inst.courses.includes(courseFilter)
        : true;

      return matchSearch && matchCourse;
    });

    filtered.sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

    const promoted = filtered.filter((i) => i.promoted);
    const normal = filtered.filter((i) => !i.promoted);

    return [...promoted, ...normal];
  }, [search, courseFilter, sortOrder]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);

  const paginatedData = processedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Head>
        <title>Institutes in {city} | CodeSkipper</title>
      </Head>

      <SimpleLayout>
        <BackButton />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-xl shadow-lg mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">
            Top Computer Institutes in {city}
          </h1>
          <p className="mt-3 opacity-90">
            Discover best training centers offering programming, data science,
            web development and more.
          </p>
        </section>

        {/* Filter Bar */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10 grid md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="🔍 Search institute..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={courseFilter}
            onChange={(e) => {
              setCourseFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Courses</option>
            {allCourses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
          </select>

          <div className="text-gray-600 flex items-center justify-center">
            {processedData.length} Institutes Found
          </div>
        </div>

        {/* Institute Grid */}
        {paginatedData.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No institutes found in this city.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedData.map((inst) => (
              <Link
                key={inst.slug}
                href={`/institute/${state}/${city}/${inst.slug}`}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer p-6 relative border border-gray-100">

                  {inst.promoted && (
                    <span className="absolute top-4 right-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
                      ⭐ Sponsored
                    </span>
                  )}

                  <div className="flex items-center gap-4">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600">
                        {inst.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {inst.address}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {inst.courses.slice(0, 3).map((course, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 text-blue-600 font-medium text-sm">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 bg-indigo-600 text-white rounded-xl py-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Own an Institute in {city}?
          </h2>
          <p className="mb-6">
            Get featured on CodeSkipper and grow your student reach.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Promote Your Institute
          </button>
        </section>
      </SimpleLayout>
    </>
  );
}
