
<script setup>
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';

import { ref } from 'vue';

const checked1 = ref(true);
</script>


<template>
<div class="bg-surface-50 dark:bg-surface-950 h-full w-full flex items-center justify-center">
    <div class="bg-surface-0 dark:bg-surface-900 p-8 md:p-12 shadow-sm rounded-2xl w-full max-w-xl flex flex-col gap-8">
        <div class="flex flex-col items-center gap-4">
            <div class="flex items-center gap-4">
                <img src="/vite.svg" alt="logo" class="w-10 h-10" />
            </div>
            <div class="flex flex-col items-center gap-2 w-full">
                <div class="text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight text-center w-full">Welcome Back</div>
            </div>
        </div>
        <div class="flex flex-col gap-6 w-full">
            <div class="flex flex-col gap-2 w-full">
                <label for="email1" class="text-surface-900 dark:text-surface-0 font-medium leading-normal">Email Address</label>
                <InputText id="email1" type="text" placeholder="Email address" class="w-full px-3 py-2 shadow-sm rounded-lg" />
            </div>
            <div class="flex flex-col gap-2 w-full">
                <label for="password1" class="text-surface-900 dark:text-surface-0 font-medium leading-normal">Password</label>
                <InputText id="password1" type="password" placeholder="Password" class="w-full px-3 py-2 shadow-sm rounded-lg" />
            </div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0">
                <div class="flex items-center gap-2">
                    <Checkbox id="rememberme1" v-model="checked1" :binary="true" />
                    <label for="rememberme1" class="text-surface-900 dark:text-surface-0 leading-normal">Remember me</label>
                </div>
                <a class="text-primary font-medium cursor-pointer hover:text-primary-emphasis">Forgot your password?</a>
            </div>
        </div>
        <Button label="Sign In" icon="pi pi-user" class="w-full py-2 rounded-lg flex justify-center items-center gap-2">
            <template #icon>
                <i class="pi pi-user !text-base !leading-normal" />
            </template>
        </Button>
    </div>
</div>
</template>
