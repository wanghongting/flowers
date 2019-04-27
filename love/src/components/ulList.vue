<template>
    <div class='uls'>
        <h2>{{ite.Subject}}</h2>
       <ul>
           <li @click="choose(ind,items.Label,ite.Subject)" v-for='(items,ind) in ite.Content' :key='ind'  :class="{cur:cur===ind}">{{items.Label}}</li>
       </ul>
    </div>
</template>

<script>

export default {
    props:["ite"],
    data(){
        return {
            cur:0,
            obj:{},
            mainlist:[]
        }
    },
  methods: {
   choose(ind,label,sub) {
      this.cur = ind;
      this.$set(this.obj,sub,label)
     this.mainlist.push(this.obj)
     localStorage.setItem("mainlist",JSON.stringify(this.mainlist))
    }
  }
}
</script>
<style  lang="scss">
.uls{
    width:100%;
  h2{
      width:100%;
      height:45px;

  }
  ul{
      width:100%;
      display:flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li{
          width:24%;
          padding:6px 12px;
          border:1px solid #ccc;
          text-align:center;
          margin-top:5px;
      }
      .cur{
          border:1px solid red;
      }
  }
}
</style>