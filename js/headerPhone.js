export const headerPhoneComp = {
	data() {
		return {
			navlist: ['new', 'procduct', 'ppe inspection', 'tech info', 'poygon', 'climbing'],
			isShow: false,
			isOpen: false,
		};
	},
	template: `
	    <header class="header">
            <div class="navigate navbgBlk">
                <div class="navigate-logoW">
                    <slot name="logosvg"></slot>
                </div>
                <div class="menu">
                    <div class="hamberge" @click="isOpen = !isOpen">
                        <span class="dli-close" v-if="isOpen"></span>
                        <span class="dli-menu" v-else>
                            <span></span><span></span><span></span>
                        </span>
                    </div>
                    <transition
                    enter-active-class="animate__animated animate__slideInDown" 
                    leave-active-class="animate__animated animate__slideOutUp">
                        <ul class="menu-list" v-show="isOpen">
                            <li v-for="item of navlist" :key="item">
                                <a href="#" class="itemWhite">{{ item }}</a>
                            </li>
                        </ul>
                    </transition>
                    <div class="menu-form">
                        <form>
                            <span class="dli-search iconWhite" @focus="showSearch" @blur="hiddenSearch"
                                tabindex="0"></span>
                            <transition
                                enter-active-class="animate__animated animate__slideInDown" 
                                leave-active-class="animate__animated animate__slideOutUp">
                                <div class="menu-form-bg" v-show="isShow">
                                    <input type="text" placeholder="search something..." class="menu-form-input" @blur="hiddenSearch">
                                </div>
                            </transition>
                        </form>
                    </div>
                </div>
            </div>
        </header>
	`,
	methods: {
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
