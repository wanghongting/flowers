<template>
  <div class='dllist'>
   
    <div>
       <h2>{{item.Subject}}</h2>
      <dl v-for='(items,ind) in item.Content' :key='ind' @click="choose(ind,items.Label,item.Subject)"  :class="{cur:cur===ind}">
        <dt>
          <img :src="items.Icon" alt="">
        </dt>
        <dd>{{items.Label}}</dd>
      </dl>
    </div>
   
  </div>
</template>

<script>

export default {
  props:["item"],
  data(){
    return {
      cur:0,
      obj1:{},
      newmainlist:[]
    }
  },
   methods: {
   choose(ind,lab,sub) {
      this.cur = ind;
      this.$set(this.obj1,sub,lab) 
     this.newmainlist=JSON.parse(localStorage.getItem('mainlist'))|| []
      this.newmainlist.push(this.obj1)
      localStorage.setItem("mainlist",JSON.stringify(this.newmainlist))     
    }
  }
}
</script>
<style  lang="scss">

.dllist {
  div{
  width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        dl {
          width: 24%;
          dt {
            width: 100%;
            img {
              width: 100%;
            }
          }
          dd {
            text-align: center;
          }
        }
        .cur {
          border: 1px solid red;
        }
      }
  }
      

</style>