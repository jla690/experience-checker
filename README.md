
# Experience Checker

Chrome extension that extracts years-of-experience and degree requirements from job postings to help quickly evaluate listings.

## Why this exists
When browsing job postings it's easy to miss or misread experience and education requirements. This extension scans postings and surfaces the likely "years of experience" and "degree" requirements so you can triage openings faster.

## Features
- Detects years-of-experience mentions (e.g., "3+ years", "five years", "1-2 years")
- Detects degree requirements (e.g., "Bachelor's", "MS", "PhD", "Associate")
- Works directly on the job posting page — no copy/paste required
- Lightweight, client-side extraction (runs in your browser)

## How it works (high level)
A content script scans the job posting text and applies heuristics and regular expressions to find common patterns for experience and education. Results are appended as badges to the page near matching text.

## Supported / Tested Sites
Common job boards and company career pages. Behavior will vary by site layout and text; if a site doesn't work well the extension will still attempt extraction from the visible text.

## Installation (developer / local)
To load the extension locally in Chrome/Edge:

1. Clone this repository:
   git clone https://github.com/jla690/experience-checker.git
2. Open Chrome and go to chrome://extensions
3. Enable "Developer mode" (top-right)
4. Click "Load unpacked" and select the extension folder (the folder containing manifest.json — usually the project root)

If the extension is published in the Chrome Web Store, install it directly from there.

## Usage
1. Open a job posting in your browser.
2. The extension will automatically extract and display:
   - Extracted "Years of experience" (best guess)
   - Extracted "Degree requirements" (list of detected degrees)
3. If results are missing or look wrong, open Developer Tools → Console for debug logs.

## Troubleshooting
- If nothing appears: ensure the extension is enabled and the job posting's text is visible (some sites render content with iframes or dynamically after load).
- For development: check the browser console for parsing errors.

## Privacy
All extraction runs locally in your browser. The extension does not send page content to external servers by default. If you plan to add telemetry or remote features, they will be documented and opt-in.
