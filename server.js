const http = require("http");
const PORT = 8000;

// webサーバーを作ろう
const server = http.createServer((rq, res) => {
  // ブラウザからアクセルが来たときの処理
  res.writeHead(200, { "Content-Type": "text/html" });
  //   writeHead(statusCode: number, statusMessage?: string | undefined, headers?: http.OutgoingHttpHeaders | http.OutgoingHttpHeader[] | undefined): http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage; }
  res.write("<h1>Hello Nodejs");
  res.end();
});

server.listen(PORT, ()=>{
    console.log("server started!!!!!!!!!!!")
});
