import Link from "next/link";

export default function notFoundPage() {
  return (
    <section className="h-96 flex flex-col items-center justify-center">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link href={"/"} className="button solid_button">Go back to home</Link>
    </section>
  )
}
