import Post from "./postModel.js";

class PostService {
    async getAll(req, res) {
        return await Post.find();
    }

    async create(post) {
        return await Post.create(post);
    }

    async getOne(id) {
        return await Post.findById(id);
    }

    async update(id, updateData) {
        return await Post.findByIdAndUpdate(id, updateData, {
            new: true,
        });
    }

    async delete(id) {
        return await Post.findByIdAndDelete(id);
    }
}

export default new PostService();
