import Navbar from "@/app/components/navbar";

export default async function HomePage() {
  return (
    <div className="px-3">
      <div className="flex flex-col gap-4 min-h-screen py-4">
        <Navbar />
        <div className="container-sm bg-grey-light flex-1 flex items-center justify-center">
          <h1>Hero</h1>
        </div>
      </div>

      <section>
        <h2>Test</h2>
      </section>
    </div>
  );
}
