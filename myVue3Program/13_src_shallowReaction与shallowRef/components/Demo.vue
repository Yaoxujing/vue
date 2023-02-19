<template>
	<h4>当前x的值是:{{x.y}}</h4>
	<button @click="x.y++">点我加一</button>
	<hr>
	<h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let x = shallowRef({
				y:0
			})
			let person = shallowReactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})

			// const name1 = person.name
			// console.log('%%%',name1)

			// const name2 = toRef(person,'name')
			// console.log('####',name2)

			//返回一个对象（常用）
			return {
				x,
				person,
				// name:toRef(person,'name'),
				// age:toRef(person,'age'),
				salary:toRef(person.job.j1,'salary'),
				// toRefs只能读第一层
				...toRefs(person)
			}
		}
	}
</script>
