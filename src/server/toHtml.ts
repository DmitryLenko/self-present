const toHtml = ({ body }: { body: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      ${body}
    </body>
    <script src="dist/client/index.js" defer></script>
  </html>
`;

export default toHtml;
