#!/bin/bash
# Script de deploy para barradatijucapsi.com.br
# Uso: bash deploy.sh
# Pré-requisito: ter acesso SSH ao servidor

set -e

DEPLOY_PATH="/var/www/prod/barradatijucapsi/barradatijucapsi"

echo "==> Copiando arquivos de build para $DEPLOY_PATH ..."
rsync -av --delete dist/public/ "$DEPLOY_PATH/"

echo "==> Deploy concluído!"
