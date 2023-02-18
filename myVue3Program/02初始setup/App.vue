<template>
  <h1>我是app组件</h1>
  <h2>姓名：{{name}}</h2>
  <h3>年龄：{{age}}</h3>
  <h3>一个人的信息</h3>
  <button @click="sayHello">点我</button>
</template>

<script>

export default {
  name: 'App',
  setup(){
    //数据
    let name ='张三'
    let age =18

    //方法
    function sayHello(){
      alert(`我叫${name}`)
    }

    return{
      name,
      age,
      sayHello
    }


  }
}
</script>
