import React from 'react';
import { Accessibility, Cpu, Zap } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Accessibility size={40} />,
            title: "Acessibilidade Total",
            description: "Projetado com foco nas necessidades da comunidade surda, garantindo autonomia real.",
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            icon: <Cpu size={40} />,
            title: "Tecnologia IoT",
            description: "Integração perfeita com lâmpadas, TVs, ar-condicionado e outros dispositivos inteligentes.",
            color: "text-secondary",
            bg: "bg-secondary/10"
        },
        {
            icon: <Zap size={40} />,
            title: "Fácil Integração",
            description: "Configuração simples e intuitiva. Comece a usar em minutos, sem complicações.",
            color: "text-accent",
            bg: "bg-accent/10"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Como o QuiroTalks funciona?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Nossa tecnologia traduz sinais da Libras em comandos digitais instantâneos,
                        permitindo que você controle seu ambiente de forma natural.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform">
                            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
