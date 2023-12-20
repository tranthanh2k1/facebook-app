<template>
	<ul class="h-full flex gap-2">
		<li
			v-for="item in menu"
			:key="item.label"
			:class="[
				menuActive.link === item.link && 'border-b-[3px] border-b-[#0866ff]',
				'relative',
			]"
			@mouseover="handleMouseOverItemMenu(item)"
			@mouseleave="handleMouseLeaveItemMenu(item)"
		>
			<NuxtLink
				:to="item.link"
				class="relative z-20 w-[110px] h-full flex items-center justify-center cursor-pointer"
			>
				<component :is="item.icon"></component>
			</NuxtLink>
			<div
				:class="
					'absolute z-10 top-1 left-0 right-0 bottom-1 rounded-lg bg-[rgb(0,0,0,5%)] opacity-0 ' +
					`hoverItemMenu${item.icon}`
				"
			></div>
		</li>
	</ul>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const menu = ref([
	{
		label: "Trang chủ",
		link: "/",
		icon: "IconsHome",
	},
	{
		label: "Video",
		link: "/watch",
		icon: "IconsVideo",
	},
	{
		label: "Marketplace",
		link: "/marketplace",
		icon: "IconsMarketPlace",
	},
	{
		label: "Nhóm",
		link: "/groups",
		icon: "IconsGroup",
	},
	{
		label: "Trò chơi",
		link: "/gaming",
		icon: "IconsGame",
	},
]);

const route = useRoute();
const currentPath = computed(() => route.path);

const menuActive = computed(() =>
	menu.value.find((item) => item.link === currentPath.value)
);

function handleMouseOverItemMenu(item) {
	if (menuActive.value.link === item.link) return;
	document.getElementsByClassName(
		"hoverItemMenu" + item.icon
	)[0].style.opacity = "1";
}

function handleMouseLeaveItemMenu(item) {
	document.getElementsByClassName(
		"hoverItemMenu" + item.icon
	)[0].style.opacity = "0";
}
</script>
