// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     <h1 className="text-rose-600">Saikat</h1>
//     </main>
//   );
// }
'use client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

