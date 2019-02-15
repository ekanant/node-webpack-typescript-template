import * as express from "express";
import * as compression from "compression";

const app = express();

const port: number = 3000;

app.use(compression());
app.get("/", async (req: express.Request, res: express.Response) => {
  res.json({
    text: "Hello world"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
