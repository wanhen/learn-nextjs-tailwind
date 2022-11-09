import Sidemenu from "../components/Sidemenu";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex">
        <nav className="w-56 flex-none md:hidden block">
          <Sidemenu />
        </nav>

        <main className="flex-1 min-w-0 overflow-auto">
          Main content
        </main>
      </div>
    </>
  );
}
