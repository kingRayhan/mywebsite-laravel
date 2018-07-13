<template>
	<div>
		<h1>Instagram</h1>
	</div>
</template>

<script>
	export default{
		created()
		{
			const api = `https://api.instagram.com/v1/users/self/media/recent/?access_token=2286603943.7a4623b.d9d4b1b436734bc293c21df23ef4f8d2`
			
			axios.get(api)
			.then( ({data}) => console.log(data) )			
		},
		data()
		{
			return{
				images: ''
			}
		}
	}
</script>