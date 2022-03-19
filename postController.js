import PostService from "./postService.js";

class PostController {
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await PostService.create({
                author,
                title,
                content,
                picture,
            });
            return res.json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async update(req, res) {
        try {
            const updateData = req.body;

            for (const key of Object.keys(updateData)) {
                if (key !== "author" && key !== "title" && key !== "content") {
                    return res.status(400).json("Неверное поле");
                }
            }

            const updatedPost = await PostService.update(
                req.params.id,
                updateData,
                { new: true }
            );
            return res.json(updatedPost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostService.delete(req.params.id);
            return res.json(deletedPost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new PostController();
