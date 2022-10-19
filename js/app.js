import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { headerComponent } from './header.js';
import { headerPhoneComp } from './headerPhone.js';

const app = createApp({
	data() {
		return {
			picLink: 'https://s.yimg.com/zp/MerchandiseImages/7AEA34653A-SP-7471103.jpg',
			name: 'Stuff Name',
			amount: 10,
			isLargePage: false,
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
	mounted() {
		if (window.innerWidth <= 1280) {
			this.isLargePage = false;
		} else {
			this.isLargePage = true;
		}
		window.addEventListener('resize', this.resizeHandler);
	},
	methods: {
		resizeHandler() {
			if (window.innerWidth <= 1280) {
				this.isLargePage = false;
			} else {
				this.isLargePage = true;
			}
		},
	},
});

app.component('header-comp', headerComponent);
app.component('header-phone', headerPhoneComp);

app.mount('#app');
