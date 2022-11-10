import Head from "next/head"
import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav";
import Sidemenu from "../components/Sidemenu";

import data from "../data/employee.json"

export default function Home() {
  const [angka, setAngka] = useState(0)

  useEffect(() => {
    setAngka(angka + 1)
    console.log(angka)
  }, [])

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
          <div className="container p-4 border-spacing-1 rounded-md">
            <h5 className="text-lg italic"> Sample List of Employee </h5>
            <ul id="listuser">
            {data.map((emp) => {
              return <li key="{emp.id}">{emp.emp_name}</li>
            })}
            </ul>
            <input type="text" className="form-control" />
            <button className="text-sm text-yellow-50 bg-slate-400 p-2 rounded-lg " onClick={() => setAngka(angka + 1)}>+</button><span>{angka}</span><button className="text-sm text-yellow-50 bg-slate-400 p-2 rounded-lg " onClick={() => setAngka(angka - 1)}>-</button>
          </div>
        </main>
      </div>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </>
  );
}
