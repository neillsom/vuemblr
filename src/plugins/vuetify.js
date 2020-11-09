import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		// dark: true,
		options: { customProperties: true },
		themes: {
			light: {
				anchor: '#536dfe',
				primary: '#536dfe',
				secondary: '#ff5c93',
				accent: '#82b1ff',
				error: '#ff4081',
				info: '#9013fe',
				success: '#3cd4a0',
				warning: '#ffc260',
				primaryConst: '#536dfe',
				secondaryConst: '#ff5c93',
				successConst: '#3cd4a0',
				greyBold: '#4a4a4a',
				greyBoldConst: '#4a4a4a',
				greyMedium: '#6e6e6e',
				greyTint: '#b9b9b9',
				default: '#e0e0e0',
				iconColor: '#757575',
				surface: '#ffffff',
				background: '#f6f7ff',
				likeColor: '#ff5c93',
			},
			dark: {
				primary: '#36465D',
				secondary: '#3E94C2',
				accent: '#6F9D4D',
				error: '#5CA2C7',
				background: '#36465D',
				iconColor: '#abb2b9',
				surface: '#ffffff',
				likeColor: '#ff492f',
			},
		},
		icons: {
			iconfont: 'fa4',
		},
	},
});
