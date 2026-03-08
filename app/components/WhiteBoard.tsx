"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Excalidraw = dynamic(
  () => import("@excalidraw/excalidraw").then((mod) => mod.Excalidraw),
  { ssr: false }
);

export default function Whiteboard() {

  const router = useRouter();

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="flex items-center justify-between w-[60%] p-4">
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold"
        >
          Back to home
        </button>

        <h1 className="text-2xl font-bold">WhiteBoard</h1>
      </div>

      <Excalidraw />
    </div>
  );
}