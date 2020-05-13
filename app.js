var element, state, aside;

element = document.querySelector(' .bars ');
aside = document.querySelector('.aside');

state = 0;

const menuObject = {

	el:element,
	
	is:state,

	aside:aside,

	change:function() {
		this.el.addEventListener('click', ()=> {
			if ( this.is === 0 ) {
				this.el.classList.add( 'open-menu' )
				this.aside.classList.add('aside-open')
				this.is = 1
			}else if ( this.is === 1 ) {
				this.el.classList.remove( 'open-menu' )
				this.aside.classList.add('aside')
				this.aside.classList.remove('aside-open')
				this.is = 0
			}
		})
	}
};

menuObject.change()