import apiClient from "../helper/apiClient";



class PostService {
    getAllPosts = () => apiClient().get('podcasts');
    getAllBlogs = () => apiClient().get('blog');
    getAllPages = () => apiClient().get('pages/58/');
    getAllMenus = () => apiClient().get('menu');
}
export default new PostService();

