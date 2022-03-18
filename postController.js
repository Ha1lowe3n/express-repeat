import Post from "./postModel.js";

class PostController {
    async getAll(req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async create(req, res) {
        try {
            const { author, title, content, picture } = req.body;
            const post = await Post.create({ author, title, content, picture });
            return res.json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getOne(req, res) {
        try {
            const post = await Post.findById(req.params.id);
            return res.json(post);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;

            for (const key of Object.keys(post)) {
                if (key !== "author" && key !== "title" && key !== "content") {
                    return res.status(400).json("Неверное поле");
                }
            }

            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                post,
                { new: true }
            );
            return res.json(updatedPost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async delete(req, res) {
        try {
            console.log(req.body);
            const deletedPost = await Post.findByIdAndDelete(req.params.id);
            return res.json(deletedPost);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default new PostController();
