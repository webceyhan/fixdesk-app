<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <div class="container">
        <div class="row justify-content-center my-5">
            <div class="col-sm-12 col-md-8 col-lg-5 my-5">
                <div class="d-flex justify-content-center mb-3">
                    <Link href="/">
                        <ApplicationLogo width="82" />
                    </Link>
                </div>

                <div class="card shadow-sm px-3">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
