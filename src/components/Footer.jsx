import React from 'react';
import { HandMetal, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg text-white">
                                <HandMetal size={24} />
                            </div>
                            <span className="text-2xl font-bold">QuiroTalks</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Empoderando a comunidade surda através da tecnologia.
                            Transformando gestos em autonomia, um sinal de cada vez.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">Sobre</a></li>
                            <li><a href="#videos" className="hover:text-primary transition-colors">Vídeos</a></li>
                            <li><a href="#features" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contato</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Mail size={18} />
                                <a href="mailto:contato@quirotalks.com" className="hover:text-primary transition-colors">contato@quirotalks.com</a>
                            </li>
                            <li className="flex gap-4 mt-4">
                                <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
                                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
                                <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} QuiroTalks. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
