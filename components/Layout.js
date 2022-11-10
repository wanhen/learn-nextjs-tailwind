import Head from "next/head"
import BottomNav from "../components/BottomNav";
import Sidemenu from "../components/Sidemenu";

import data from "../data/employee.json"

export default function Layout({children}) {
 

  return (
    <>
      <Head>
        <title>Welcome to Next JS Learning</title>
      </Head>
      <div className="min-h-screen flex">
        <nav className="w-56 flex-none hidden lg:block">
          <Sidemenu />
        </nav>

        <main className="flex-1 min-w-0 overflow-auto">
          {children}
        </main>
      </div>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </>
  );
}
