import Header from "@/components/header";

export default async function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="h-screen flex justify-center px-6">
        <div className="bg-grey-light w-full h-[90%]"></div>
      </div>
    </div>
  );
}
