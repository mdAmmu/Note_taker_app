import React from 'react'
import { NotebookPen, Cloud, ShieldCheck } from "lucide-react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center">
      <div className="text-indigo-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

const Features = () => {
  return (
    <div>
        <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<NotebookPen size={32} />}
            title="Easy Note Taking"
            desc="Quickly create and organize notes with a clean and distraction-free interface."
          />

          <FeatureCard
            icon={<Cloud size={32} />}
            title="Cloud Sync"
            desc="Access your notes from any device with seamless real-time synchronization."
          />

          <FeatureCard
            icon={<ShieldCheck size={32} />}
            title="Secure Storage"
            desc="Your notes are protected with modern security and encryption."
          />
        </div>
      </section>
    </div>
  )
}

export default Features