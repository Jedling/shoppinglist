import express from "express";
import * as cors from "cors";
const corsHandler = cors({ origin: true });
const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", req.headers.origin);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, x-authorization, x-refresh-authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });
app.use(corsHandler);
// app.get("/", function(req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" });
// });

app.listen(80, function() {
  console.log("CORS-enabled web server listening on port 80");
});
