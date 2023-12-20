<template>
	<header class="shadow">
		<div class="mx-4 h-14 flex items-center justify-between">
			<div class="flex items-center gap-3 w-[360px]">
				<IconsLogo />
				<div class="flex items-center rounded-[50px] bg-[#f0f2f5]">
					<div class="pl-3">
						<IconsSearch />
					</div>
					<input
						type="text"
						placeholder="Tìm kiếm trên Facebook"
						class="p-2.5 bg-[#f0f2f5] text-[rgb(5,5,5)] text-[15px] h-10 rounded-r-[50px] focus:outline-none"
					/>
				</div>
			</div>
			<div class="h-full">
				<LayoutsMenu />
			</div>
			<div class="flex justify-end gap-2 w-[360px]">
				<div
					class="w-10 h-10 bg-[#e4e6eb] rounded-full flex justify-center items-center cursor-pointer"
				>
					<IconsMenu />
				</div>
				<div
					class="w-10 h-10 bg-[#e4e6eb] rounded-full flex justify-center items-center cursor-pointer"
				>
					<IconsMessenger />
				</div>
				<div
					class="w-10 h-10 bg-[#e4e6eb] rounded-full flex justify-center items-center cursor-pointer"
				>
					<IconsNotification />
				</div>
				<div class="relative cursor-pointer">
					<img
						src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/392920874_1540561076747756_5419912083966578909_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=t_3ED3TdbawAX8S5scd&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAexUGw9F7EaJYe_mCeMHFb7P0qUsfyTe1nPTLA2YZK2g&oe=6586C786"
						alt="avatar"
						class="w-10 h-10 bg-[#e4e6eb] rounded-full flex justify-center items-center"
					/>
					<div
						class="absolute bottom-0 right-0 bg-[#e4e6eb] rounded-full border-none p-px"
					>
						<IconsChevronDown />
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
