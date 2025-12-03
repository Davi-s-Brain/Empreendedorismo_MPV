import React from 'react';
import { Layers, Smartphone, Wifi, Shield, Heart, Globe } from 'lucide-react';

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex gap-4 p-6 rounded-xl hover:bg-white/50 transition-colors">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const Features = () => {
    const features = [
        {
            icon: <Layers size={24} />,
            title: "Design Modular",
            description: "Expanda seu sistema conforme sua necessidade. Adicione novos módulos e dispositivos facilmente."
        },
        {
            icon: <Smartphone size={24} />,
            title: "App Intuitivo",
            description: "Interface amigável para configurar seus gestos e dispositivos em poucos toques."
        },
        {
            icon: <Wifi size={24} />,
            title: "Conexão Estável",
            description: "Protocolos de comunicação otimizados para garantir resposta imediata aos seus comandos."
        },
        {
            icon: <Shield size={24} />,
            title: "Privacidade Garantida",
            description: "Seus dados de gestos e configurações são processados localmente para sua segurança."
        },
        {
            icon: <Heart size={24} />,
            title: "Feito com Empatia",
            description: "Desenvolvido em colaboração com a comunidade surda para resolver problemas reais."
        },
        {
            icon: <Globe size={24} />,
            title: "Suporte Universal",
            description: "Compatível com as principais marcas de dispositivos inteligentes do mercado."
        }
    ];

    return (
        <section id="features" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Recursos Poderosos</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Tudo o que você precisa para autonomia
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
