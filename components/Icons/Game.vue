<template>
	<svg
		viewBox="0 0 24 24"
		width="24"
		height="24"
		fill="currentColor"
		:style="`color: ${colorIconHome}`"
	>
		<path
			d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"
		></path>
		<path
			d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"
		></path>
	</svg>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { ROUTES } from "@/utils/constants/routes";

const route = useRoute();
const currentPath = computed(() => route.path);

const routeHome = ref(ROUTES.GAMING);

const colorIconHome = computed(() =>
	routeHome.value === currentPath.value ? "#0866ff" : "#65676b"
);
</script>
