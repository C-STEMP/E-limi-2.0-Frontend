import axios from "axios";

import config from "./config";

const API_URL = config.API_URL;

class CategoryService {
  async getCategories() {
    const { data: result } = await axios.get(`${API_URL}catalog/categories`);

    const { data: categories } = result;
    return categories;
  }
}

export default new CategoryService();
