OLD_NODE_VERSION=$(node -v)
COLOUR_GREEN='\033[0;32m'
YELLOW='\033[0;33m'
COLOUR_OFF='\033[0m'
deactivate_node

export NPM_CONFIG_PREFIX=$NVM_DIR/versions/node/${OLD_NODE_VERSION}
export npm_config_prefix=$NVM_DIR/versions/node/${OLD_NODE_VERSION}
export PATH=$PATH:$NPM_CONFIG_PREFIX

echo "Red Bull Cerro Abajo Frontend"
echo "  [-] node ${OLD_NODE_VERSION}"
echo "  ${COLOUR_GREEN}[+] node $(node -v)${COLOUR_OFF}"
