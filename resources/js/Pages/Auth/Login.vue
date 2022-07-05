<script setup>
import BreezeButton from "@/Components/Button.vue";
import BreezeCheckbox from "@/Components/Checkbox.vue";
import BreezeGuestLayout from "@/Layouts/Guest.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Log in" />

        <div class="card-body">
            <breeze-validation-errors class="mb-3" />

            <div
                v-if="status"
                class="alert alert-success mb-3 rounded-0"
                role="alert"
            >
                {{ status }}
            </div>

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <breeze-label for="email" value="Email" />
                    <breeze-input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autofocus
                    />
                </div>

                <div class="mb-3">
                    <breeze-label for="password" value="Password" />
                    <breeze-input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                    />
                </div>

                <div class="mb-3">
                    <div class="form-check">
                        <breeze-checkbox
                            id="remember_me"
                            name="remember"
                            v-model:checked="form.remember"
                        />

                        <label class="form-check-label" for="remember_me">
                            Remember Me
                        </label>
                    </div>
                </div>

                <div class="mb-0">
                    <div
                        class="d-flex justify-content-end align-items-baseline"
                    >
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="text-muted me-3"
                        >
                            Forgot your password?
                        </Link>

                        <breeze-button
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

                            Log in
                        </breeze-button>
                    </div>
                </div>
            </form>
        </div>
    </BreezeGuestLayout>
</template>
