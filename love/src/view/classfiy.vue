<template>
  <div class="wrap">
    <header>
      <p>分类</p>
    </header>
    <section>
        <dl-list v-for="(item,index) in dllists" :key='index' :item='item'></dl-list>
        <ul-list v-for="(ite,inde) in ullists" :key='inde' :ite='ite'></ul-list>   
    </section>
    <footer>
      <button @click="$router.push({name:'main'})">提交选择结果</button>
    </footer>
  </div>
</template>

<script>

import dlList from "../components/dlList";
import ulList from "../components/ulList";
export default {
  data() {
    return {
      datalist: [],
      dllists:[],
      ullists:[]
  
    };
  },
  components: {
    dlList,
    ulList
  },
  created() {
    this.$app.get("/api/cata").then(res => {
      this.datalist = res.data.data;
      this.dllists = this.datalist.filter((item,index)=>{
        if(index<3){
            return item
        }
      })
      this.ullists = this.datalist.filter((ite,inde)=>{
        if(inde>=3){
            return ite
        }
      })
      console.log(this.ullists)
    
    });
  },

};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
  }
  section {
    width: 100%;
    height: 100%;
    overflow: scroll;
    div {
      width: 100%;
      h2 {
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
   
    }
  }
}
footer {
  width: 100%;
  height: 45px;
  button {
    width: 100%;
    height: 45px;
  }
}
</style>