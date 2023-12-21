<template>
	<div class="flex justify-between bg-[#f0f2f5]">
		<HomeMenuBar />
		<div class="flex justify-center">
			<div class="bg-white w-[500px] rounded-lg mt-4 shadow_post mb-[100px]">
				<div class="flex items-center px-4 pt-3">
					<img
						src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-1/392920874_1540561076747756_5419912083966578909_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=t_3ED3TdbawAX8S5scd&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAexUGw9F7EaJYe_mCeMHFb7P0qUsfyTe1nPTLA2YZK2g&oe=6586C786"
						alt="avatar"
						class="w-10 h-10 rounded-full"
					/>
					<div class="ml-2 flex-1">
						<p>
							<span
								class="font-medium text-[15px] hover:underline cursor-pointer"
								>Trần Tiến Thành</span
							>
							<span class="text-[rgb(28,30,33)]">
								đã cập nhật ảnh bìa của anh ấy.</span
							>
						</p>
						<div class="flex items-center gap-1">
							<span class="text-[rgb(101,103,107)] text-[13px]">5 giờ</span>
							<span>&#8226;</span>
							<IconsPublic />
						</div>
					</div>
					<div class="p-2 hover:bg-[rgb(0,0,0,5%)] rounded-full cursor-pointer">
						<IconsEllipsis />
					</div>
					<div class="p-2 hover:bg-[rgb(0,0,0,5%)] rounded-full cursor-pointer">
						<img src="/images/cancel.png" alt="btn cancel" class="w-5 h-5" />
					</div>
				</div>
				<p class="px-4 pt-1 pb-4">sdaskmdkasmdkasmdaskdkasda</p>
				<img
					src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/412971288_376970988046540_7212883761037523420_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=gdCJmak8zygAX_a7mmg&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCfI03uNzphzumHUjKwjNRnz-GeMY6Cx8U8QKx1NHk9Rg&oe=6588356E"
					alt="image section"
				/>
				<div class="mx-4 py-2.5">Like</div>
				<div class="mx-3">
					<div class="p-1 flex">
						<div class="flex-1 border-y border-y-[#00000066]">
							<div class="py-1">
								<div
									class="h-8 flex items-center justify-center text-[#65676b] font-semibold rounded hover:bg-[#f0f2f5] cursor-pointer"
								>
									Thích
								</div>
							</div>
						</div>
						<div class="flex-1 border-y border-y-[#00000066]">
							<div class="py-1">
								<div
									class="h-8 flex items-center justify-center text-[#65676b] font-semibold rounded hover:bg-[#f0f2f5] cursor-pointer"
								>
									Bình luận
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-[360px]">Right</div>
	</div>
</template>
