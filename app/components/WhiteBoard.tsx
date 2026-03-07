"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css";
import { useNavigate } from "react-router-dom";

export default function Whiteboard() {

    const navigate = useNavigate();

  return (
    <div style={{ height: "100vh", width: "100%" }}>
        <div className="flex items-center justify-between w-[60%] p-4">
            <button
            onClick={() => navigate("/dashboard")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold">Back to home</button>
            <h1 className="text-2xl font-bold">WhiteBoard</h1>
        </div>
      <Excalidraw />
    </div>
  );
}