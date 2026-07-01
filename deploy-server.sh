#!/bin/bash
# Executar no servidor: bash deploy-server.sh
set -e

REPO_DIR="/var/www/prod/barradatijucapsi"
WEB_ROOT="/var/www/prod/barradatijucapsi/barradatijucapsi"
BRANCH="claude/deploy-barradatijucapsi-prod-u0zp9g"

echo "==> Atualizando código..."
cd "$REPO_DIR"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"

echo "==> Instalando dependências..."
npm install -g pnpm 2>/dev/null || true
pnpm install --frozen-lockfile

echo "==> Buildando..."
pnpm build

echo "==> Copiando para web root..."
rsync -av --delete dist/public/ "$WEB_ROOT/"

echo "==> Deploy concluído! Site disponível em /var/www/prod/barradatijucapsi/barradatijucapsi/"
