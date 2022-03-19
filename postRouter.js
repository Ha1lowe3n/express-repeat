import Router from "express";
import PostController from "./postController.js";
import upload from "./config/multer.js";

const postRouter = new Router();

postRouter.post("/posts", upload.single("picture"), PostController.create);
postRouter.get("/posts", PostController.getAll);
postRouter.get("/posts/:id", PostController.getOne);
postRouter.put("/posts/:id", upload.single("picture"), PostController.update);
postRouter.delete("/posts/:id", PostController.delete);

export default postRouter;
