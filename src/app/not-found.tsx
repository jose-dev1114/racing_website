import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
      style={{ backgroundColor: "rgba(12, 83, 148, 1)" }}
    >
      <h1 className="text-white text-8xl font-bold mb-4">404</h1>
      <h2 className="text-white text-3xl font-bold mb-4">Page not found</h2>
      <p className="text-white/70 text-base mb-10 max-w-md">
        We can&apos;t find the page you were looking for.
      </p>
      <Link href="/" className="btn-primary px-10 py-3">
        Go to Home Page
      </Link>
    </div>
  );
}

