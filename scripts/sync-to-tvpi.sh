#!/bin/bash
# Quick sync of hass_frontend to tvpi for development
set -e
cd "$(dirname "$0")/.."
rsync -avz --delete --exclude='*.map' --exclude='*.br' --exclude='*.gz' hass_frontend/ tvpi:~/neostronghold/app/hass_frontend/
echo "Synced. Restart Core..."
ssh tvpi "docker restart neostronghold-core"
echo "Done."
