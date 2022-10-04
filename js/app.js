import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.40/vue.esm-browser.js';
import { headerComponent } from './header.js';

const app = createApp({
	data() {
		return {
			picLink: 'https://s.yimg.com/zp/MerchandiseImages/7AEA34653A-SP-7471103.jpg',
			name: 'Stuff Name',
			amount: 10,
		};
	},
});

app.component('header-comp', headerComponent);

app.mount('#app');
