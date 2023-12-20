<template>
	<div class="text-3xl">Home page</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
	console.log("object", this);
});
</script>
