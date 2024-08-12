#!/bin/bash

cd "$(dirname "$0")"
open http://0.0.0.0:8000/

# Attempt to start the server using SimpleHTTPServer
if python -m SimpleHTTPServer &>/dev/null; then
  pass
else
  # Fallback to Python 3's http.server
  python3 -m http.server 8000
fi
