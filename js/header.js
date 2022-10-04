export const headerComponent = {
	data() {
		return {
			navlist: ['new', 'procduct', 'ppe inspection', 'tech info', 'poygon', 'climbing'],
			isOntop: true,
			isDown: false,
			scrollPos: 0,
			isShow: false,
		};
	},
	template: `
	<header class="header">
            <div class="navigate" :class="navColor">
                <div :class="logoColor">
                    <slot name="logosvg"></slot>
                </div>
                <ul class="navigate-list">
                    <template v-for="(item, index) of navlist" :key="index">
                        <li class="navigate-item" v-if="(index + 1) === navlist.length">
                            <a href="#" class="itemOrg" v-cloak>/{{ item }}</a>
                        </li>
                        <li class="navigate-item" v-else>
                            <a href="#" :class="itemColor" v-cloak>{{ item }}</a>
                        </li>
                    </template>
                </ul>
                <div class="navigate-form">
                    <form>
                        <input type="text" placeholder="search something..." class="navigate-input" v-show="isShow"
                            @blur="hiddenSearch">
                        <span class="dli-search" :class="iconColor" @focus="showSearch" @blur="hiddenSearch"
                            tabindex="0"></span>
                    </form>
                </div>
            </div>
        </header>
	`,
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
		showSearch() {
			this.isShow = true;
		},
		hiddenSearch(evt) {
			if (!evt.relatedTarget) {
				this.isShow = false;
			}
		},
	},
};
