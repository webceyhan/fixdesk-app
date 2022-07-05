<script setup>
import GuestLayout from "@/Layouts/Guest.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <div class="card-body">
            <ValidationErrors class="mb-3" />

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <Label for="name" value="Name" />
                    <Input
                        id="name"
                        type="text"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                    />
                </div>

                <div class="mb-3">
                    <Label for="email" value="Email" />
                    <Input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                    />
                </div>

                <div class="mb-3">
                    <Label for="password" value="Password" />
                    <Input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                    />
                </div>

                <div class="mb-3">
                    <Label
                        for="password_confirmation"
                        value="Confirm Password"
                    />
                    <Input
                        id="password_confirmation"
                        type="password"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                    />
                </div>

                <div class="mb-0">
                    <div
                        class="d-flex justify-content-end align-items-baseline"
                    >
                        <Link
                            :href="route('login')"
                            class="text-muted me-3 text-decoration-none"
                        >
                            Already registered?
                        </Link>

                        <Button
                            class="ms-4"
                            :class="{ 'text-white-50': form.processing }"
                            :disabled="form.processing"
                        >
                            <div
                                v-show="form.processing"
                                class="spinner-border spinner-border-sm"
                                role="status"
                            >
                                <span class="visually-hidden">Loading...</span>
                            </div>

                            Register
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
