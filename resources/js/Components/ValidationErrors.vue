<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/inertia-vue3";

const errors = computed(() => usePage().props.value.errors);

const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <div class="alert alert-danger text-sm p-2" role="alert" v-if="hasErrors">
        <div class="font-weight-bold">Whoops! Something went wrong.</div>

        <ul>
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </div>
</template>
