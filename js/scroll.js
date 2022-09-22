Vue.createApp({
	data() {
		return {
			navlist: ['new', 'procduct', 'ppe inspection', 'tech info', 'poygon', 'climbing'],
			isOntop: true,
			isDown: false,
			scrollPos: 0,
		};
	},
	computed: {
		itemColor() {
			return {
				itemBlk: this.isOntop,
				itemWhite: this.isDown,
			};
		},
		navColor() {
			return {
				navbgTransp: this.isOntop,
				navbgBlk: this.isDown,
			};
		},
		logoColor() {
			return {
				'navigate-logo': this.isOntop,
				'navigate-logoW': this.isDown,
			};
		},
		iconColor() {
			return {
				iconBlk: this.isOntop,
				iconWhite: this.isDown,
			};
		},
	},
	mounted() {
		window.addEventListener('scroll', this.scrollDown, { passive: true });
	},
	methods: {
		scrollDown() {
			this.scrollPos = document.body.getBoundingClientRect().top;
			if (this.scrollPos < 0) {
				this.isOntop = false;
				this.isDown = true;
			} else if (this.scrollPos === 0) {
				this.isOntop = true;
				this.isDown = false;
			}
		},
	},
}).mount('#header');
