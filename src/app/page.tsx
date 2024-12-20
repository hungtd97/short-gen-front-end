"use client";

import Header from "@/components/molecules/Header";
import HomeComponent from "@/components/template/Home";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HomeComponent />;
    </main>
  );
}
