# Medviz Milestone Monitor

Monitor the milestone for journals, institutions, and anything we care.

# Initialization Prompt

We want to create a web app that helps users to manage, track, and visualize the milestones of journals, institutions, and anything we care. The core concept in this app is "Entity", i.e., journal, institution, conference, person, company, website, etc. 

## Technical requirements

1. The backend is based on supabase. I will provide the `VITE_SUPABASE_URL` and `VITE_SUPABASE_KEY` in the `.env.local` file.
2. The app is a single page application, with several views for different functions.
3. The frontend is based on vue.js and vite.
4. The frontend components use latest PrimeVue.
5. for any vue component, I prefer the sequence of first `<script setup>`, then `<template>`, last `<style scoped>`.
6. use a single data store based on Pinia to manage all states, which means all components can access the store.

## Functionalities

1. Users can login/logout using their email and password based on supabase.js
2. Users can create projects, different users can collaborate on one project. The project owner can add/remove users to the project.
3. 