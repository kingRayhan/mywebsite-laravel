<template>
	<div class="pt-5">
		
		<div class="pb-3 text-center">
			<a href="https://www.instagram.com/king_rayhan/" target="_blank" class="insta-url">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT3SURBVGhD7ZpNiFVlHMYndYTxI9KUFEGRchmIA66kIEJdKC3KDxyQ0lJSwYzGjZgtTPOrTUXobIJRK0vD2uWmVoLEJG40PyoSzIUfg2Pk54y/58xzhjuee+4599z3znUxP3h4z33e////vu+de76naZhhGkxfX99Tvb29c9EOdBJdRvfwg0CtW+gs+omPa9AUDx0Oii9EXdGIJeA9QDcC6JZLDoB3H+1HUz2N4lBvHIW+6y8dFf8b7UIvaQCsEQ6tGeq1oOdRG3WP0N71mLfRCodVD8nT0GkXu4bWsTna3XWH8WagQx5ffOyu/JA7hsQzLnIazXDXkMPYK9Edz6Xddj5IOOrEM2i87YbBHBYg7Y/SAtuVUaAXcY1muu2Gw3ze97zO0zTbLg8BOsT+7oT1tocUhh7jzUHgj2BO8T67znZ5CJjrwL9oKq+6DjBuB3qILqJZtgfAW+T5ddkqDwE7HLjH1pDBsLM1dgxz6HDXANgj8a+7P/0AROdJB71sq2ao9Swly/5cSiFO55CHGl+wvdtdg8DvdMibtpIQdNlBhS8PqDEH7UHnUHRSM918PoE2oIkOHwT+WqQj5dfET7A9CPq2qRjtVltJ6LyHHhA30lZuyJuJjmmQGNVCV9js7nf6wbuJPmBzlNNzQ95q1/jSVhIFQLc/5oacVyl8Q8me5HY2W9HAJQzeePQGOq44wfbPNGW/+TTIWeHcQ7aSKACqWggFX0H3lUjbicr+bEohdB5x/zhHh/vMfSiG+PALoZh+Tjed95HtXJD3HIovg761nQmxdVlItE/QHrRVFeTpi9AVhGrMt10R4sIuhLhWigntE5k/pzTI1VW1+M1WRYgPuxAK7VUwbfWX1yVQopkaV10rcTZ/HGKCL+Ssgmnn2CoMNTpc6z1bqRATfCF3UaFzzuNQQ/fomtzntlIJuhCKTFYg7b+2aoI6r7neMVupEBN0IS15Y/NAvaUqRpt59Au6EKE4BVPwaVuFocZm1yp7oVhK8IVQ6ISCaV+3VZi4FiyxlUo9FrJBwbTHbRWCfD0t0cWqHjCMs50KccEXMhFFF4owz3bVaEIqQLvfVkWIC7sQQbF2JdDq8elk27khZ5Xze1CuJ4rEhV8Isbr1jPcV3RDNdFcmxK5COheJ5bYzITb8QgTxz1A0ei5Mex3p2in1hom+6cToDlDxYou7ckF8voUQ0OOPuSFnLPpG+YLtq+gAm2toF6NlqB3pVjd6gk+rn9Myl8gNOfFCOm0loTN6Kk7bYqsqyNMTwVOqkQb9/6MDqNBTdvI2us4+W0no/MNBL9gqBPmz0Cb0GfoB6c5xN6WXoMxDbCWos8tz3GQrCZ0/OqjN1hMH0/vFc1xkKwmd7ygIjth6omBek5ijnsz8h9J//gROIUBviu6ghr1KSIM5xc+0jtpKhyAdbRRc6D68XjCfqUhHul6m12o7HSfc9mJW2m4oTGU0iveNw7azIbgNCZ15871YqRPMvRl95UVcQtVdCpGw08naufSSJdiLz7wwrl64Rn8J0LPjF91VHSRu1kJUhbYLLWaz5nv0LBhDR6dtqMdj/4mKLSKGAjpbX1BBwbbe8OoE9yF6G0snuZpEneVIZ+xPaH9F8ZcnDrM5ydOpDQrp2dO7KHotV28YR+eJ79nMPjoVhQF0R/cW0l/kC6T/TgihT5Eua3SRWehab5hhgtPU9AgP7eiBKFI7ZwAAAABJRU5ErkJggg==">
				&nbsp;
				king_rayhan
			</a>
		</div>
		
		<div class="text-center" v-if="!images">
			<div class="lds-dual-ring"></div>
		</div>

		<Carousel v-if="images" :autoplay="true" :loop="true" :perPageCustom="[[320, 2], [768, 3], [769, 5]]">
			<Slide v-for="image in images" :key="image.id">
				<img :src="image.images.standard_resolution.url">
			</Slide>
		</Carousel>
	</div>
</template>
<style lang="scss">
	.VueCarousel-slide{
		img{
			height: 300px;
			width: auto;
		}
	}
	.insta-url{
		font-size: 25px;
	}
	.lds-dual-ring {
	  display: inline-block;
	  width: 64px;
	  height: 64px;
	}
	.lds-dual-ring:after {
	  content: " ";
	  display: block;
	  width: 46px;
	  height: 46px;
	  margin: 1px;
	  border-radius: 50%;
	  border: 5px solid #fff;
	  border-color: #fff transparent #fff transparent;
	  animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
	  0% {
	    transform: rotate(0deg);
	  }
	  100% {
	    transform: rotate(360deg);
	  }
	}
</style>
<script>
	import { Carousel, Slide } from 'vue-carousel'
	export default{
		components: {
		    Carousel,
		    Slide
		},
		mounted()
		{
			const api = `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
			
			$.ajax({
		        method: "GET",
		        url: api,
		        dataType: "jsonp",
		        jsonp: "callback",
		        jsonpCallback: "jsonpcallback",
		        success: ({ data }) => this.images = data
		    });		
		},
		data()
		{
			return{
				images: ''
			}
		}
	}
</script>