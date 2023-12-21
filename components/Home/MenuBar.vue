<template>
	<div class="w-[360px] px-2 mt-4">
		<div
			v-for="item in menuBar"
			:key="item.label"
			class="px-2 rounded-lg hover:bg-[#e4e6eb] cursor-pointer"
		>
			<div class="flex items-center gap-3">
				<img :src="item.image" alt="avatar" class="w-9 h-9 rounded-full my-2" />
				<span class="font-medium text-[15px]">{{ item.label }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const menuBar = ref([
	{
		image:
			"https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/392920874_1540561076747756_5419912083966578909_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=t_3ED3TdbawAX8S5scd&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAexUGw9F7EaJYe_mCeMHFb7P0qUsfyTe1nPTLA2YZK2g&oe=6586C786",
		label: "Trần Tiến Thành",
		link: "facebook.com",
	},
	{
		image: "/images/friend.png",
		label: "Bạn bè",
		link: "facebook.com",
	},
	{
		image: "/images/groups.png",
		label: "Nhóm",
		link: "facebook.com",
	},
	{
		image: "/images/video.png",
		label: "Video",
		link: "facebook.com",
	},
	{
		image: "/images/media.png",
		label: "Marketplace",
		link: "facebook.com",
	},
	{
		image: "/images/feed.png",
		label: "Bảng feed",
		link: "facebook.com",
	},
	{
		image: "/images/video-game.png",
		label: "Chơi game",
		link: "facebook.com",
	},
	{
		image: "/images/messenger.png",
		label: "Messenger",
		link: "facebook.com",
	},
	{
		image: "/images/game.png",
		label: "Video chơi game",
		link: "facebook.com",
	},
]);
</script>
