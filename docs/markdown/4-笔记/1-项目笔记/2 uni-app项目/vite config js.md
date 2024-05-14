# vite.config.js

```jsx
import {
	defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: {
			'vue-i18n': '/node_modules/vue-i18n/',
		},
	},
	server: {
		hmr: true
	},
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				//生产环境时移除console
				drop_console: true,
				drop_debugger: true,
			}
		},
		rollupOptions: {
			output: {
				// https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
				sanitizeFileName(name) {
					const match = DRIVE_LETTER_REGEX.exec(name);
					const driveLetter = match ? match[0] : "";
					// A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
					// Otherwise, avoid them because they can refer to NTFS alternate data streams.
					return (
						driveLetter +
						name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
					);
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			// scss: {
			// 	additionalData: `@import "/uni_modules/vk-uview-ui/theme.scss";`
			// },
			// less: {
			// 	charset: false,
			// 	modifyVars: {
			// 		hack: `true; @import "@/styles/less/global.less";@import "@/styles/less/theme.less";`,
			// 	},
			// 	javascriptEnabled: true,
			// }
		}
	}
});
```

```jsx
import {
	defineConfig
} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import gzipPlugin from 'rollup-plugin-gzip'
import {
	visualizer
} from 'rollup-plugin-visualizer';

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni(), gzipPlugin()],
	resolve: {
		alias: {
			'vue-i18n': '/node_modules/vue-i18n/',
		},
	},
	rollupOptions: {
		plugins: []
	},
	server: {
		hmr: true,
	},
	build: {
		cssCodeSplit: true,
		assetsInlineLimit: 5000,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			}
		},
		rollupOptions: {
			plugins: [visualizer({
				open: false
			})],
			output: {
				sanitizeFileName(name) {
					const match = DRIVE_LETTER_REGEX.exec(name);
					const driveLetter = match ? match[0] : "";
					return (
						driveLetter +
						name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
					);
				},
			},
		},
	},
});
```