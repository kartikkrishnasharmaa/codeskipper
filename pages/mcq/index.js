import CourseLayout from "@/components/layouts/CourseLayout";

export default function Home() {
  return (
    <CourseLayout>
      <h1 className="text-3xl font-bold">Welcome to My Course Platform</h1>
      <p className="mt-4">Click any course to explore more.</p>
    </CourseLayout>
  );
}
