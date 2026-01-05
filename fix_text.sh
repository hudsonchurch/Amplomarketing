#!/bin/bash

# Replace all text-[hsl(var(--text-secondary))] with text-gray-600 for better readability
sed -i 's/text-\[hsl(var(--text-secondary))\]/text-gray-600/g' /workspace/amplo_marketing/src/pages/Index.tsx

# Replace oversized text classes
sed -i 's/text-3xl md:text-5xl/text-2xl md:text-3xl lg:text-4xl/g' /workspace/amplo_marketing/src/pages/Index.tsx
sed -i 's/text-4xl md:text-6xl lg:text-7xl/text-3xl md:text-4xl lg:text-5xl/g' /workspace/amplo_marketing/src/pages/Index.tsx

echo "Text readability fixes applied"