#!/bin/bash

set -e

SSH_HOST="restatw@ssh.cluster100.hosting.ovh.net"
SSH_PORT="22"
REMOTE_DIR="~/www"
LOCAL_OUT="./out"

echo "→ Build..."
npm run build

echo "→ Nettoyage du serveur..."
ssh -p $SSH_PORT $SSH_HOST "rm -rf $REMOTE_DIR/* $REMOTE_DIR/.[^.]*" || true

echo "→ Upload des fichiers..."
rsync -avz -e "ssh -p $SSH_PORT" \
  --exclude="*.txt" \
  --exclude="chapitres/" \
  --exclude="credits/" \
  --exclude="_not-found/" \
  $LOCAL_OUT/ $SSH_HOST:$REMOTE_DIR/

echo "→ Création du .htaccess..."
ssh -p $SSH_PORT $SSH_HOST "printf 'DirectoryIndex index.html\nRewriteEngine On\nRewriteRule ^([a-z0-9-]+)/?$ /$1.html [L]\n' > $REMOTE_DIR/.htaccess"

echo "✓ Déploiement terminé !"
