
# Experience Checker

Chrome extension that extracts years-of-experience and degree requirements from job postings to help quickly evaluate listings.

## Why this exists
When browsing job postings on LinkedIn, it can be time consuming to read through an entire job posting only to realize that you do not meed the required YOE or degree. This extension helps quickly show the YOE and degree requirements in badges at the top of the job posting, right under the job title.

## Features
- Detects years-of-experience mentions (e.g., "3+ years", "five years", "1-2 years")
- Detects degree requirements (e.g., "Bachelor's", "MS", "PhD", "Associate")
- Works directly on the job posting page, no copy/paste required
- Lightweight, client-side extraction (runs in your browser)

## How it works (high level)
A content script scans the job posting text and applies regular expressions to find common patterns for experience and education. It then filters out false positives that often have years associated with them (e.g., "Benefits", "Vacation", "Pension"). Results are appended as badges to the page near matching text.

## Supported / Tested Sites
Currently supports LinkedIn

## Installation (developer / local)
To load the extension locally in Chrome/Edge:

1. Clone this repository:
   git clone https://github.com/jla690/experience-checker.git
2. Open Chrome or other Chromium browsers and go to chrome://extensions
3. Enable "Developer mode" (top-right)
4. Click "Load unpacked" and select the extension folder

If the extension is published in the Chrome Web Store, install it directly from there.

## Usage
1. Open a job posting in your browser.
2. The extension will automatically extract and display:
   - Extracted "Years of experience" (best guess)
   - Extracted "Degree requirements" (list of detected degrees)
3. If results are missing or look wrong, try refreshing the page.

## Privacy
All extraction runs locally in your browser. The extension does not send page content to external servers.
