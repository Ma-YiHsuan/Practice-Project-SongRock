import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { headerComponent } from './header.js';

const app = createApp({
	data() {
		return {
			picLink: 'https://s.yimg.com/zp/MerchandiseImages/7AEA34653A-SP-7471103.jpg',
			name: 'Stuff Name',
			amount: 10,
			footerLists: [
				{
					title: 'company',
					contents: ['About Us', 'Staff', 'Jobs', 'History', 'Supports', 'Quality Management', 'Recall Info'],
				},
				{
					title: 'download',
					contents: [
						'Catalogues',
						'PPE Inspection',
						'EU Declarations of Conformity',
						'Logotype',
						'Terms of sale',
						'Terms of sale of POLYGON',
					],
				},
			],
		};
	},
	computed: {
		titleLists() {
			return this.footerLists.map((item) => {
				return item.title.toUpperCase();
			});
		},
	},
});

app.component('header-comp', headerComponent);

app.mount('#app');
