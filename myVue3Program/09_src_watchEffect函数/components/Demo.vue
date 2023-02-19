<template>
	<h2>当前求和为：{{sum}}</h2>
    <button @click = 'sum++'>点我+1</button>
    <br>
    <h2>当前的信息为{{ msg}}</h2>
    <button @click = 'msg+="!"'>修改信息</button>
    <br>
    <h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>工资：{{person.job.j1.salary}}k</h2>
    <br>
    <button @click = 'person.name+="~"'>修改姓名</button>
    <button @click = 'person.age++'>修改年龄</button>
    <button @click = 'person.job.j1.salary++'>涨薪</button>
</template>

<script>
	import {ref,reactive,watch,watchEffect} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
            let sum = ref(0)
            let msg = ref('你好啊')
            let person = reactive({
                name:"张三",
                age:20,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })

            //监视
            // watch(sum,(newValue,oldValue)=>{
            //     console.log('sum变化了',newValue,oldValue)
            // },{immediate:true})
            watchEffect(()=>{
                //用啥监视啥
                const x1 = sum.value
                const x2 = person.job.j1.salary
                console.log('watchEffect的回调执行了')
            })

			//返回一个对象（常用）
			return {
				sum,
                msg,
                person
			}
		}
	}
</script>
