<script setup>
import GuestLayout from "@/Layouts/Guest.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
});

const submit = () => {
    form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Reset Password" />

        <div class="card-body">
            <ValidationErrors class="mb-3" />

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <Label for="email" value="Email" />
                    <Input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autofocus
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
                    <div class="d-flex justify-content-end">
                        <Button
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

                            Reset Password
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
