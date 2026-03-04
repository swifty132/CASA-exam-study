import csv
import os

# --- Configuration ---
INPUT_CSV = 'questions.csv'
OUTPUT_JS = 'generated_questions.js'

# Step 1: Create a template CSV if it doesn't exist yet
if not os.path.exists(INPUT_CSV):
    with open(INPUT_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        # The headers for our spreadsheet
        writer.writerow(['Topic', 'Question', 'Wrong1', 'Wrong2', 'Wrong3', 'Correct', 'Image'])
    print(f"I just created a template file named '{INPUT_CSV}'.")
    print("Open it in Excel/Sheets, add your questions, and run this script again!")
    exit()

# Step 2: Read the CSV and convert to JavaScript
js_output = "    // --- BATCH GENERATED FROM CSV ---\n\n"
question_count = 0

with open(INPUT_CSV, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    
    for row in reader:
        # Extract and clean up the data (escapes quotes so it doesn't break the JS code)
        topic = row.get('Topic', 'General').strip()
        question = row.get('Question', '').strip().replace('"', '\\"').replace('\n', ' ')
        w1 = row.get('Wrong1', '').strip().replace('"', '\\"')
        w2 = row.get('Wrong2', '').strip().replace('"', '\\"')
        w3 = row.get('Wrong3', '').strip().replace('"', '\\"')
        correct = row.get('Correct', '').strip().replace('"', '\\"')
        img = row.get('Image', '').strip()

        # Skip completely empty rows
        if not question or not correct:
            continue

        # Compile the distractors (ignores empty columns if a question only has 1 or 2 wrong options)
        distractors = [w for w in [w1, w2, w3] if w]
        options_formatted = ", ".join([f'"{w}"' for w in distractors])

        # Only add the 'img' key if an image name was actually provided
        img_line = f'\n            img: "{img}",' if img else ''

        # Build the JavaScript function block
        js_block = f"""    () => {{
        return {{
            topic: "{topic}",
            question: "{question}",{img_line}
            options: [{options_formatted}],
            correct: "{correct}"
            }};
        }},
        """
        js_output += js_block
        question_count += 1

# Step 3: Write the generated code to the output file
with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
    f.write(js_output)

print(f"Success! Converted {question_count} questions.")
print(f"Open '{OUTPUT_JS}' and paste its contents into your JavaScript file.")