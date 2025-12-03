import React from 'react';
import { ArrowRight, Hand } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-secondary-light/20 via-white to-primary-light/20">
            {/* Abstract Background Shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-primary/20 text-primary-dark font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                        Tecnologia Assistiva Inovadora
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                        Controle o seu mundo com o poder das <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">suas mãos</span>
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        A primeira plataforma que conecta Libras a dispositivos IoT.
                        Inclusão, autonomia e tecnologia em cada gesto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://empreendedorismo-mpv-ml.vercel.app"
                            className="group bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Começar Agora
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://empreendedorismo-mpv-ml.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full font-bold text-lg text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                        >
                            Ver Demo
                        </a>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative z-10 glass-card p-8 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 aspect-video flex items-center justify-center text-white shadow-inner">
                            <div className="text-center space-y-4">
                                <Hand size={64} className="mx-auto text-accent animate-bounce" />
                                <p className="font-mono text-sm text-gray-400">Detectando gesto...</p>
                                <div className="text-2xl font-bold text-accent">"Ligar Luz"</div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800">Status</div>
                                    <div className="text-sm text-gray-500">Conectado</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-gray-800">Dispositivo</div>
                                <div className="text-sm text-gray-500">Lâmpada Sala</div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements behind card */}
                    <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-secondary/30 rounded-2xl -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
