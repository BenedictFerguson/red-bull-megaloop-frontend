OLD_NODE_VERSION=$(node -v)
NODE_VERSION='22.13.0'
COLOUR_GREEN='\033[0;32m'
COLOUR_OFF='\033[0m'

fnm use ${NODE_VERSION}

echo "Entering Cerro Abajo Frontend"
echo "  [-] node ${OLD_NODE_VERSION}"
echo "  ${COLOUR_GREEN}[+] node $(node -v)${COLOUR_OFF}"
