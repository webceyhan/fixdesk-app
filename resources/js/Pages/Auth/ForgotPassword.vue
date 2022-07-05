<script setup>
import GuestLayout from "@/Layouts/Guest.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    status: String,
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <GuestLayout>
        <Head title="Forgot Password" />

        <div class="card-body">
            <div class="mb-2">
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </div>

            <div v-if="status" class="alert alert-success" role="alert">
                {{ status }}
            </div>

            <ValidationErrors class="mb-2" />

            <form @submit.prevent="submit">
                <div>
                    <Label for="email" value="Email" />
                    <Input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autofocus
                    />
                </div>

                <div class="d-flex justify-content-end mt-4">
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

                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
