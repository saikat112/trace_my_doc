import React, { useState } from "react";
export default function index() {
  return(
    <main className="w-full h-screen flex flex-row relative">
      <section className="flex flex-col p-10 ml-20 w-full gap-5">
        <h1 className="text-4xl text-neutral-200">Dashboard</h1>
        <div className="w-full h-80 border border-neutral-500/50 bg-neutral-800/20 rounded"/>
        <div className="flex flex-row gap-5 w-full"/>
        <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded"/>
        <div className="border-neutral-500/50 h-60 w-1/2 bg-neutral-800/20 rounded"/>
      </section>

    </main>

  );
}