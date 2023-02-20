<template>
	<div class="app">
		<h3>我是App组件（祖），{{name}}--{{price}}</h3>
	</div>
</template>

<script>
	import { ref ,reactive,toRefs,isRef, readonly,isReactive,isReadonly,isProxy } from 'vue'
	export default {
		name:'App',
		setup(){
			let car = reactive({name:'奔驰',price:'40W'})
			let car2 = ref(0)
			let sum = readonly(car)

			console.log(isRef(car2))
			console.log(isReactive(car))
			console.log(isReadonly(sum))
			console.log(isProxy(sum))
			return {
				...toRefs(car),
			}
		}
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>
