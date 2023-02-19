<template>
	<h4>当前求和为:{{sum}}</h4>
	<button @click="sum++">点我加一</button>
	<hr>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{salary}}K</h2>
	<h2 v-show="person.car">座驾信息：{{person.car}}</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="salary++">涨薪</button>
	<button @click="showRawPerson">输出最原始的person</button>
	<button @click="addCar" >给人添加一辆车</button>
	<button @click="person.car.name+='!'" v-show="person.car">换名字</button>
	<button @click="person.car.price++" v-show="person.car">价格增加</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs,toRaw,markRaw} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let sum = ref(0)
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})

			function showRawPerson(){
				console.log(toRaw(person))
			}

			function addCar(){
				// 任何的操作都是响应式的
				let car ={name:'奔驰',price:40}
				// 数据能变但是不是响应式了
				person.car=markRaw(car)
			}

			//返回一个对象（常用）
			return {
				sum,
				person,
				// name:toRef(person,'name'),
				// age:toRef(person,'age'),
				salary:toRef(person.job.j1,'salary'),
				// toRefs只能读第一层
				...toRefs(person),
				showRawPerson,
				addCar
			}
		}
	}
</script>
