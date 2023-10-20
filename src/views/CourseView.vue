<template>
    <div>
        <base-nav></base-nav>

        <header class="bg-gradient-dark">
            <div class="page-header min-vh-75" style="background-image: url('/img/shapes/waves-white.svg')">
                <span class="mask bg-gradient-primary opacity-8"></span>
                <div class="container">
                    <div class="row justify-content-center my-7">
                        <div class="col-lg-8 text-center mx-auto my-auto">
                            <h1 class="text-white">Learn an amazing vocation</h1>
                            <p class="lead mb-4 text-white opacity-8">
                                We’re constantly trying to express ourselves and actualize our
                                dreams. If you have the opportunity to, learn something new.
                            </p>
                        </div>
                    </div>

                    <div class="row shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
                        <form @submit.prevent="search" class="col-12 mt-lg-n2 mt-2">
                            <label class="text-white">Search courses</label>

                            <div class="input-group mb-3">
                                <input v-model="searchString" type="text" class="form-control form-control-alternative"
                                    placeholder="Enter course name" aria-label="Enter course name"
                                    aria-describedby="button-search" />
                                <button class="btn bg-gradient-warning mb-0" type="button" id="search-button">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>


        <!-- -------- END HEADER 5 w/ text and illustration ------- -->
        <div class="course-details">
        <div class="course-image">
          <img :src="course.image" alt="Course Image">
        </div>
        <div class="course-info">
          <h1>{{ course.name }}</h1>
          <p><strong>Instructor:</strong> {{ course.instructor }}</p>
          <p><strong>About the Course:</strong></p>
          <p>{{ course.description }}</p>
        </div>
      </div>

        <base-footer></base-footer>
    </div>
</template>

<script>
import BaseNav from "../components/navbars/BaseNav.vue";
import BaseFooter from "../components/footers/BaseFooter.vue";

import CategoryService from "../services/category";
import CoursesService from "../services/courses";

export default {
    components: {
        BaseNav,
        BaseFooter,
    },
     data() {
        return {
            course: {
                name: "Course Name",
                instructor: "Instructor Name",
                description: "Description of the course.",
                image: "course-image-url.jpg" // You should replace this with the actual image URL.
            }
        };
    },
    methods: {
        search() {
            return;
        },
    },
    mounted() {
        CategoryService.getCategories()
            .then((categories) => {
                this.categories = categories;
                console.log(categories);
            })
            .catch((error) => {
            });
        CoursesService.getCourses().then(
            (courses) => {
                this.courses = courses.content;
                console.log(this.courses);
            }
        ).catch(
            err => {
                console.log(err.message);
            }
        )
    },
};
</script>
