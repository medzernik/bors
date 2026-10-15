<script setup lang="ts">
import { ref, computed } from "vue";
import Queue from "./pages/queue/Queue.vue";
import Help from "./pages/help/Help.vue";

const routes = {
    "/": Queue,
    "/help": Help,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
    currentPath.value = window.location.hash;
});

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || "/"] || Queue;
});
</script>

<template>
    <a href="#/">Queue</a>
    <a href="#/help">Help</a>
    <component :is="currentView" />
</template>
