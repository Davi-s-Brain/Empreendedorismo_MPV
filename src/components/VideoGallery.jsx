import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ title, duration, color }) => (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video cursor-pointer">
        {/* Placeholder Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 group-hover:scale-105 transition-transform duration-700`}></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Play fill="white" className="ml-1" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">{title}</h3>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                {duration}
            </span>
        </div>
    </div>
);

const VideoGallery = () => {
    return (
        <section id="videos" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Conheça o QuiroTalks
                    </h2>
                    <p className="text-lg text-gray-600">
                        Veja nossa tecnologia em ação e entenda nossa visão.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <VideoCard
                        title="O Pitch"
                        duration="3 min"
                        color="from-primary to-primary-dark"
                    />
                    <VideoCard
                        title="MVP em Ação"
                        duration="5 min"
                        color="from-secondary to-secondary-dark"
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoGallery;
