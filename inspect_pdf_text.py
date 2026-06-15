# -*- coding: utf-8 -*-
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("downloads/extracted/政府採購法令彙編_第35版.pdf")

# Search for the page where "壹、政府採購法及其施行 細則之條文對照" starts.
# We will inspect pages around the beginning of that section.
found_pages = []
for idx in range(10, 50):
    text = reader.pages[idx].extract_text()
    if "第一條" in text or "第 1 條" in text or "立法宗旨" in text:
        found_pages.append((idx, text[:200]))

print("Found candidate pages:")
for p, snippet in found_pages:
    print(f"Page {p+1}: {repr(snippet)}")
