const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it'); // Markdown to HTML converter
const hljs = require('highlight.js'); // Syntax highlighting library

// Function to create a README-like HTML file
function createReadMeViewer(readMeFilePath) {
    if (!fs.existsSync(readMeFilePath)) {
        console.error(`README file not found at: ${readMeFilePath}`);
        return;
    }

    // Read the README.md content
    const readMeContent = fs.readFileSync(readMeFilePath, 'utf-8');

    // Create a new instance of markdown-it with additional options
    const md = new MarkdownIt({
        html: true,
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return (
                        '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>'
                    );
                } catch (error) {
                    console.error(error);
                }
            }
            return ''; // Use auto-detection if no language specified
        },
    });

    // Convert Markdown to HTML using markdown-it
    const htmlContent = md.render(readMeContent);

    // Create an HTML file with a README-like style
    const viewerHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>README Viewer</title>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/default.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
            <script>hljs.initHighlightingOnLoad();</script>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 20px;
                    background-color: #f6f8fa;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    background-color: white;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                }
                h1 {
                    font-size: 24px;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5;
                }
                pre {
                    background-color: #f4f4f4;
                    padding: 10px;
                    border-radius: 5px;
                    overflow-x: auto;
                }
                code {
                    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
                    font-size: 14px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="container">
                ${htmlContent}
            </div>
        </body>
        </html>
    `;

    // Write the HTML to a file (e.g., README.html)
    const viewerHtmlFilePath = path.join('.', 'README.html');
    fs.writeFileSync(viewerHtmlFilePath, viewerHtml, 'utf-8');

    console.log(`README-like viewer HTML file created at: ${viewerHtmlFilePath}`);
}



module.exports = {
    createReadMeViewer:createReadMeViewer
}
