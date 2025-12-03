import React, { useState } from 'react';
import { Menu, X, HandMetal } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 glass bg-white/80">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg text-white">
                        <HandMetal size={24} />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        QuiroTalks
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#hero" className="text-gray-600 hover:text-primary font-medium transition-colors">Início</a>
                    <a href="#about" className="text-gray-600 hover:text-primary font-medium transition-colors">Sobre</a>
                    <a href="#videos" className="text-gray-600 hover:text-primary font-medium transition-colors">Vídeos</a>
                    <a href="#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Funcionalidades</a>
                    <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/30">
                        Fale Conosco
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col p-4 gap-4 animate-fade-in">
                        <a href="#hero" className="text-gray-600 hover:text-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Início</a>
                        <a href="#about" className="text-gray-600 hover:text-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Sobre</a>
                        <a href="#videos" className="text-gray-600 hover:text-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Vídeos</a>
                        <a href="#features" className="text-gray-600 hover:text-primary font-medium p-2" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
                        <button className="bg-primary text-white px-6 py-2 rounded-full font-medium w-full">
                            Fale Conosco
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
