<template>
  <h1>一个人的信息</h1>
  <h2 v-show ='person.name'>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2 v-show ='person.sex'>性别：{{person.sex}}</h2>
  <h2>工作种类：{{person.job.type}}</h2>
  <h2>工作薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
  import {ref ,reactive} from 'vue'
  export default {
    name: 'App',
    setup(){
      //数据
      // let name =ref('张三')
      // let age =ref(18)
      // let job = reactive({
      //   type:"前端工程师",
      //   salary:'30k'
      // })
      // let hobby =reactive(['抽烟','喝酒','烫头'])

      // 全部放在一起 数据
      let person = reactive(
        {
        name:'张三',
        age:18,
        job:{
          type:"前端工程师",
          salary:'30k'
        },
        hobby:['抽烟','喝酒','烫头']
      }
      )

      //方法
      function changeInfo(){
        person.name='李四',
        person.age = 18,
        person.job.salary='60k',
        person.job.type ='小菜鸡',
        person.hobby[0]='学习'
      }
      function addSex(){
        person.sex ='女'
      }
      function deleteName(){
        delete person.name 
      }

      return{
        person,
        changeInfo,
        addSex,
        deleteName
      }


    }
  }
</script>
