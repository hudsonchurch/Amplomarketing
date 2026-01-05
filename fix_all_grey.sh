#!/bin/bash

# NUCLEAR OPTION - Replace ALL possible grey text variations with strong colors
cd /workspace/amplo_marketing/src

# Replace all grey text classes
sed -i 's/text-gray-[0-9][0-9][0-9]/text-black/g' pages/Index.tsx
sed -i 's/text-slate-[0-9][0-9][0-9]/text-black/g' pages/Index.tsx
sed -i 's/text-neutral-[0-9][0-9][0-9]/text-black/g' pages/Index.tsx
sed -i 's/text-stone-[0-9][0-9][0-9]/text-black/g' pages/Index.tsx
sed -i 's/text-zinc-[0-9][0-9][0-9]/text-black/g' pages/Index.tsx

# Replace muted text
sed -i 's/text-muted-foreground/text-black/g' pages/Index.tsx
sed -i 's/text-muted/text-black/g' pages/Index.tsx

# Replace any opacity that makes text look grey
sed -i 's/opacity-[0-9][0-9]/opacity-100/g' pages/Index.tsx
sed -i 's/text-white\/[0-9][0-9]/text-white/g' pages/Index.tsx
sed -i 's/text-black\/[0-9][0-9]/text-black/g' pages/Index.tsx

# Replace any remaining secondary text colors
sed -i 's/text-secondary/text-black/g' pages/Index.tsx

echo "All grey text variations replaced with strong colors"