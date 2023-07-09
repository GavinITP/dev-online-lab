export const generateIframeSrcDoc = (htmlCode: string, cssCode: string, jsCode: string) => {
    return `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
  };