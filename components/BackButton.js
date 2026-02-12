import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        marginBottom: "20px",
        padding: "8px 12px",
        cursor: "pointer"
      }}
    >
      ⬅ Previous
    </button>
  );
}
