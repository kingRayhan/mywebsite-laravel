<template>
	<div class="pt-5">
		<Carousel :autoplay="true" :loop="true" :perPageCustom="[[320, 2], [768, 3], [769, 5]]">
			<Slide v-for="image in images" :key="image.id">
				<img :src="image.images.standard_resolution.url">
			</Slide>
		</Carousel>
	</div>
</template>
<script>
	import { Carousel, Slide } from 'vue-carousel'
	export default{
		components: {
		    Carousel,
		    Slide
		},
		created()
		{
			const api = `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
			
			$.ajax({
			        method: "GET",
			        url: api,
			        dataType: "jsonp",
			        jsonp: "callback",
			        jsonpCallback: "jsonpcallback",
			        success: ({ data }) => this.images = data
			        // success: ({ data }) => console.log(data)
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