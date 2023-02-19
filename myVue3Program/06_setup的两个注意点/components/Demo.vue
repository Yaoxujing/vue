<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<button @click="test">测试触发一下Demo组件的Hello事件</button>
    <slot name="qwe"></slot>
</template>

<script>
	import {reactive} from 'vue'
	export default {
		name: 'Demo',
		props:['msg','school'],
		emits:['hello'],

        // beforeCreate(){
        //     console.log('---beforecreate---')
        // },

		setup(props,context){
            //第一个参数 传递的参数
			console.log('---setup---',props)
            //第二个参数 上下文
			console.log('---setup---context：',context)
            // context 三个参数
			// console.log('---setup---attrs：',context.attrs) //相当与Vue2中的$attrs
			// console.log('---setup---emit：',context.emit) //触发自定义事件的。
			console.log('---setup---slots：',context.slots) //插槽

			//数据
			let person = reactive({
				name:'张三',
				age:18
			})

			//方法
			function test(){
				context.emit('hello',666)
			}

			//返回一个对象（常用）
			return {
				person,
				test
			}
		}
	}
</script>
