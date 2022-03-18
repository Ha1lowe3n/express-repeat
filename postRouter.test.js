import request from "supertest";
import app from "./index.js";

describe("POST (create post) /posts", () => {
    describe("given required params (author, title, content)", () => {
        // 	{
        // 		"author": "Yura",
        // 		"title": "yura-boss",
        // 		"content": "supamida"
        // 	}
        //	should save post to the database
        //	should respond with a json object containg the post id
        //	should respond with a 200 status code
        //	should specify json in the content type header

        it("should respond with a 200 status code", async () => {
            const response = await request(app).post("/api/posts").send({
                author: "Yura",
                title: "yura-boss",
                content: "supamida",
            });
            expect(response.statusCode).toBe(200);
        });
        it("should specify json in the content type header", async () => {
            const response = await request(app).post("/api/posts").send({
                author: "Yura",
                title: "yura-boss",
                content: "supamida",
            });
            expect(response.headers["content-type"]).toEqual(
                expect.stringContaining("json")
            );
        });
        it("response has _id", async () => {
            const response = await request(app).post("/api/posts").send({
                author: "Yura",
                title: "yura-boss",
                content: "supamida",
            });
            expect(response.body._id).toBeDefined();
        });
    });

    describe("when some required params (author, title, content) are missing", () => {
        // 	{
        // 		"author": "Dima",
        // 		"title": "yopt",
        // 	}
        //	should respond with a 400 status code
    });
});
