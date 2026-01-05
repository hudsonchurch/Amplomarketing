#!/bin/bash

cd /workspace/amplo_marketing/src/pages

# Replace ALL text colors with only these approved colors:
# text-black, text-white, text-navy, text-gold, text-red-500, text-green-500

# First, replace all navy with black for maximum contrast
sed -i 's/text-navy/text-black/g' Index.tsx

# Make sure all white text stays white
sed -i 's/text-white/text-white/g' Index.tsx

# Keep gold accents
sed -i 's/text-gold/text-gold/g' Index.tsx

# Keep red for urgency
sed -i 's/text-red-500/text-red-500/g' Index.tsx

# Replace any remaining color variations with black
sed -i 's/text-[a-z]*-[0-9][0-9][0-9]/text-black/g' Index.tsx
sed -i 's/text-[a-z]*-[0-9][0-9]/text-black/g' Index.tsx

echo "Replaced all text with only approved colors: black, white, gold, red"