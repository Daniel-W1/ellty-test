"use client";

import CustomButtom from "@/components/button";
import PageRow from "@/components/pagerow";
import Separator from "@/components/separator";

export type PageKey = "page1" | "page2" | "page3" | "page4" | "all";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <div
        style={{
          borderRadius: "6px",
          boxShadow: "0 0 6px 0 rgba(20, 20, 20, 0.12)",
        }}
        className="flex flex-col border-4 border-border-primary py-[10px] px-0"
      >
        <PageRow
          text="All pages"
        />
        <Separator />
        <PageRow
          text="Page 1"
        />
        <PageRow
          text="Page 2"
        />
        <PageRow
          text="Page 3"
        />
        <PageRow
          text="Page 4"
        />
        <Separator />
        <CustomButtom text="Done"/>
      </div>
    </main>
  );
}
