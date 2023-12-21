// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	css: ["~/assets/styles/main.css"],
	imports: {
		autoImport: false,
	},
	components: {
		global: true,
		dirs: ["~/components"],
	},
});
