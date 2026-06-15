# -*- coding: utf-8 -*-
import sys
import pypdf

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("downloads/extracted/政府採購法令彙編_第35版.pdf")

def print_outline(outline, depth=0):
    for item in outline:
        if isinstance(item, list):
            print_outline(item, depth + 1)
        else:
            title = getattr(item, 'title', str(item))
            # Resolve page number
            try:
                page_num = reader.get_destination_page_number(item) + 1
            except Exception as e:
                page_num = "Unknown"
            print("  " * depth + f"- {title} (Page {page_num})")

if reader.outline:
    print("PDF Outline:")
    print_outline(reader.outline)
else:
    print("No outline found.")
