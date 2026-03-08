"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

type Note = {
    id: number
    title: string
    description: string
    tags: string[]
}

export default function Dashboard() {

    const router = useRouter()

    const [notes, setNotes] = useState<Note[]>([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")

    const handleCreate = () => {

        const newNote: Note = {
            id: Date.now(),
            title,
            description,
            tags: tags.split(",").map(tag => tag.trim())
        }

        setNotes([...notes, newNote])

        setTitle("")
        setDescription("")
        setTags("")
    }

    return (
        <div className="p-6">

            {/* Navbar */}
            <div className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-xl">
                <button
                    onClick={() => router.push("/")}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg"
                >
                    Back to Home
                </button>

                <h1 className="text-xl font-bold">Note Taker Dashboard</h1>

                <button
                    onClick={() => router.push("/whiteboard")}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                    WhiteBoard
                </button>
            </div>

            {/* Layout */}
            <div className="flex gap-6 mt-6">

                {/* Left Form */}
                <div className="bg-white shadow-md rounded-xl p-6 w-[30%]">

                    <h2 className="text-lg font-semibold mb-4">
                        Create Note
                    </h2>

                    <div className="flex flex-col gap-3">

                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-2 rounded-md"
                        />

                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border p-2 rounded-md"
                        />

                        <input
                            type="text"
                            placeholder="Tags (comma separated)"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="border p-2 rounded-md"
                        />

                        <button
                            onClick={handleCreate}
                            className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                        >
                            Create Note
                        </button>

                    </div>

                </div>

                {/* Right Notes */}
                <div className="bg-blue-50 w-[70%] min-h-[500px] rounded-xl p-6">

                    <div className="grid grid-cols-3 gap-4">

                        {notes.map((note) => (

                            <div
                                key={note.id}
                                className="bg-white rounded-xl p-4 shadow-md"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {note.title}
                                </h3>

                                <p className="text-gray-600 text-sm mt-2">
                                    {note.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {note.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}