const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

// webサーバーを作ろう
const server = http.createServer((req, res) => {
  // ブラウザからアクセルが来たときの処理
  res.writeHead(200, { "Content-Type": "text/html" });
  //   writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }
  res.write(html);
  res.end();
  if (req.method === "GET") console.log("GET");
  if (req.method === "PUT") console.log("PUT");
});

server.listen(PORT, () => {
  console.log("server started!!!!!!!!!!!");
});
