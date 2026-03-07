import { Star } from 'lucide-react';
import React from 'react'

interface ReviewCardProps {
    name: string;
    review: string;
}

const Review = () => {


    function ReviewCard({ name, review }: ReviewCardProps) {
        return (
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                    ))}
                </div>
                <p className="text-gray-600 mb-4">"{review}"</p>
                <h4 className="font-semibold">{name}</h4>
            </div>
        );
    }
    return (
        <div>
            <section className="bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-14">
                        What Users Say
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ReviewCard
                            name="Sarah Johnson"
                            review="This app completely changed how I organize my ideas. It's fast and very easy to use."
                        />

                        <ReviewCard
                            name="David Lee"
                            review="I love the clean interface and cloud sync feature. My notes are always available."
                        />

                        <ReviewCard
                            name="Michael Chen"
                            review="Perfect for students and professionals. Simple but powerful!"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review