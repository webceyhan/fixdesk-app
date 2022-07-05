<script setup>
import BreezeButton from "@/Components/Button.vue";
import BreezeGuestLayout from "@/Layouts/Guest.vue";
import BreezeInput from "@/Components/Input.vue";
import BreezeLabel from "@/Components/Label.vue";
import BreezeValidationErrors from "@/Components/ValidationErrors.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    password: "",
});

const submit = () => {
    form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
    });
};
</script>

<template>
    <BreezeGuestLayout>
        <Head title="Confirm Password" />

        <div class="card-body">
            <div class="mb-2">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <breeze-validation-errors class="mb-2" />

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <breeze-label for="password" value="Password" />
                    <breeze-input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                        autofocus
                    />
                </div>

                <div class="d-flex justify-content-end mt-2">
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

                        Confirm
                    </breeze-button>
                </div>
            </form>
        </div>
    </BreezeGuestLayout>
</template>
