// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss"],
	imports: {
		autoImport: false,
	},
	components: {
		global: true,
		dirs: ["~/components"],
	},
});
