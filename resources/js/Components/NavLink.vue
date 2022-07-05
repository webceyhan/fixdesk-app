<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps(["href", "active"]);

const classes = computed(() =>
    props.active ? "nav-link active font-weight-bolder" : "nav-link"
);
</script>

<template>
    <li class="nav-item">
        <Link :href="href" :class="classes">
            <slot />
        </Link>
    </li>
</template>
