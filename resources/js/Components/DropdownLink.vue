<script setup>
import { Link } from "@inertiajs/inertia-vue3";
defineProps(["href"]);
</script>

<template>
    <button
        type="submit"
        @click="$emit('clicked')"
        class="dropdown-item px-4"
        v-if="!href"
    >
        <slot />
    </button>

    <Link :href="href" class="dropdown-item px-4" v-else>
        <slot />
    </Link>
</template>
