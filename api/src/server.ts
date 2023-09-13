import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
  return "hello world";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Http server running http://localhost:3333");
  });
