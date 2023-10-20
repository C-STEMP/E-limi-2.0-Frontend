import axios from "axios";

import config from "./config";

const API_URL = config.API_URL;

class CoursesService {
  async getCourses() {
    const { data: result } = await axios.get(`${API_URL}catalog/courses`);

    const { data: courses } = result;

    return courses;
  }
}

export default new CoursesService();
