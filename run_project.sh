#!/bin/bash

# Função para matar processos ao sair
cleanup() {
    echo "Parando todos os serviços..."
    kill $SERVER_PID $GATSBY_PID $VITE_PID 2>/dev/null
    exit
}

trap cleanup SIGINT

echo "=== Iniciando QuiroTalks ==="

# 1. Iniciar Servidor Python (Backend)
echo "[1/3] Iniciando Servidor Python (Porta 5000)..."
cd app-mvp/servidor
# Verifica se precisa instalar deps (simplificado)
if ! pip freeze | grep -q "Flask"; then
    echo "Instalando dependências Python..."
    pip install -r requirements.txt
fi
python3 server.py &
SERVER_PID=$!
cd ../..

# 2. Iniciar MVP Frontend (Gatsby)
echo "[2/3] Iniciando MVP Interface (Porta 8000)..."
cd app-mvp/libras-ML
# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do MVP..."
    npm install --legacy-peer-deps
fi
npm run develop &
GATSBY_PID=$!
cd ../..

# 3. Iniciar Landing Page (Vite)
echo "[3/3] Iniciando Landing Page (Porta 5173)..."
# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências da Landing Page..."
    npm install
fi
npm run dev &
VITE_PID=$!

echo "=================================================="
echo "Tudo rodando!"
echo "- Landing Page: http://localhorst:5173"
echo "- MVP Interface: http://localhost:8000"
echo "- Backend API: http://localhost:5000"
echo "=================================================="
echo "Pressione Ctrl+C para parar tudo."

wait
