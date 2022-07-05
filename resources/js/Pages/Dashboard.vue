<script setup>
import AuthenticatedLayout from "@/Layouts/Authenticated.vue";
import { Head } from "@inertiajs/inertia-vue3";
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="h4 font-weight-bold">Dashboard</h2>
        </template>

        <div class="card my-4 shadow-sm">
            <div class="card-body">You're logged in!</div>
        </div>
    </AuthenticatedLayout>
</template>
