<template>
<div>
    <section>
        <div class="page-header min-vh-100">
            <div class="container">
                <img src="/img/logo.png" class="position-absolute top-0 mt-5" style="height: 75px; object-fit: contain;">

                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                        <div class="card card-plain">

                            <div class="card-header pb-0 text-lef mt-5">
                                <h4 class="font-weight-bolder">Reset password</h4>
                                <p class="mb-0">You will receive a link in your e-mail within a few seconds.</p>
                            </div>
                            <div class="card-body">
                                <form-message :type="response.type" v-model:message="response.message"></form-message>
                                <form @submit.prevent="reset">
                                    <div class="mb-3">
                                        <input type="email" v-model="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" :disabled="loading || undefined" class="btn bg-gradient-primary btn-lg w-100 my-4">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer pt-0">
                                <p class="mb-4 text-sm mx-auto">
                                    Don't have an account?
                                    <RouterLink to="/register" class="text-primary text-gradient font-weight-bold">Sign up</RouterLink>
                                </p>
                                <p class="mb-4 text-sm mx-auto">
                                    Have an account?
                                    <RouterLink to="/login" class="text-primary text-gradient font-weight-bold">Sign in</RouterLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                        <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                            <img src="/img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0">
                            <div class="position-relative">
                                <img class="max-width-500 w-100 position-relative z-index-2" style="filter: hue-rotate(90deg);" src="/img/illustrations/lock.png" alt="locked">
                            </div>
                            <!-- <h4 class="mt-5 text-white font-weight-bolder">Soft UI Design</h4>
                            <p class="text-white">Just as it takes a company to sustain a product, it takes a community to sustain a protocol.</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <base-footer></base-footer>

</div>
</template>

<script>
import BaseFooter from '../components/footers/BaseFooter.vue';
import FormMessage from '../components/FormMessage.vue';
import AuthenticationService from '../services/authentication';

export default {
    components: {
        BaseFooter,
        FormMessage,
    },
    data() {
        return {
            email: '',
            loading: false,
            response: {
                message: '',
                type: 'danger'
            },
        };
    },
    methods: {
        async reset() {
            this.$Progress.start();
            this.loading = true;

            try {

                const payload = {
                    email: this.email
                };

                const response = await AuthenticationService.resetPassword(payload);

                this.response = {
                    message: `<strong>${response.message}</strong>`,
                    type: 'success',
                };
                
                this.email = '';
            } catch (error) {
                this.response = {
                    message: `<strong>Error! ${error.message}</strong>`,
                    type: 'danger',
                };
            }

            this.loading = false;
            this.$Progress.finish();
        },
    },
};
</script>
