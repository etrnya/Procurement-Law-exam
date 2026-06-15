# -*- coding: utf-8 -*-
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("downloads/extracted/政府採購法令彙編_第35版.pdf")

# Extract pages 11 to 64 (0-indexed: 10 to 63)
extracted_text = []
for idx in range(10, 64):
    print(f"Extracting page {idx+1}...")
    extracted_text.append(reader.pages[idx].extract_text())

# Save to a temporary file
output_path = "downloads/extracted_laws_raw.txt"
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n\n=== PAGE BREAK ===\n\n".join(extracted_text))

print(f"Successfully extracted {len(extracted_text)} pages to {output_path}")
