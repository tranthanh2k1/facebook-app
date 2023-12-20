<template>
	<div class="h-14 flex items-center justify-between shadow">
		<div class="flex items-center gap-3">
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
			<ul class="h-full flex gap-2">
				<li
					class="w-[110px] flex items-center cursor-pointer justify-center border-b-[3px] border-b-[#0866ff]"
				>
					<div>
						<NuxtLink to="/"><IconsHome /></NuxtLink>
					</div>
				</li>
				<li class="w-[110px] flex items-center cursor-pointer justify-center">
					<NuxtLink to="/watch"><IconsVideo /></NuxtLink>
				</li>
				<li class="w-[110px] flex items-center cursor-pointer justify-center">
					<NuxtLink to="/marketplace"><IconsMarketPlace /></NuxtLink>
				</li>
				<li class="w-[110px] flex items-center cursor-pointer justify-center">
					<NuxtLink to="/groups"><IconsGroup /></NuxtLink>
				</li>
				<li class="w-[110px] flex items-center cursor-pointer justify-center">
					<NuxtLink to="/gaming"><IconsGame /></NuxtLink>
				</li>
			</ul>
		</div>
		<div>ưqdqweqweqw</div>
	</div>
</template>
