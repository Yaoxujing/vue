<template>
	<div class="son">
		<h3>我是Son组件（孙）</h3>
		<Dalod></Dalod>
	</div>
</template>

<script>
	import Dalod from './Dalod.vue'
	export default {
		name:'Son',
		components:{Dalod},
	}
</script>

<style>
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>
