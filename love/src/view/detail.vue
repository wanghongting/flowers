<template>
    <div class='wrap'>
            <header>
                <h2><span>></span>{{titles}}</h2>
                <ul>
                    <li :class='{current:iscurrent}' @click="changedata('total')">综合</li>
                    <li @click='changedata("sales")' :class='{currents:iscurrents}'>销量</li>
                    <li @click='changedata("price")' :class='{currentse:iscurrentse}'>价格</li>
                    <li>最新</li>
                </ul>
            </header>
            <section>
                <div class="scroll">
                    <dl v-for='(item,index) in detaillist' :key='index'>
                        <dt><img :src="item.Image" alt=""></dt>
                        <dd>
                            <p>{{item.Name}}</p>
                            <p class='orange'>价格:{{item.Price}}</p>
                            <p>销量：{{item.Sales}}</p>
                            <p>{{item.Introduction}}</p>
                        </dd>
                    </dl>
                </div>
            </section>
    </div>
</template>

<script>

export default {
    data(){
        return {
         detaillist :[],
         titles:'',
         iscurrent:true,
         iscurrents:false,
         iscurrentse:false
        }
    },
    created(){
        this.$app.get("api/detail").then((res)=>{
          this.detaillist=res.data.data.Datas.FlowerList;
          this.titles = res.data.data.Datas.FlowerListBanners.Title
        })
   
    },
    methods:{
        changedata(type){
            if(type==='price'){
                this.iscurrentse = true;
                this.iscurrent = false;
                this.iscurrents = false;
                this.detaillist = this.detaillist.slice(0).sort((a,b)=>{
                    return a.Price-b.Price;
                })
            }else if(type==='sales'){
                this.iscurrents = true;
                this.iscurrentse = false;
                this.iscurrent = false;
              this.detaillist=this.detaillist.slice(0).sort((a,b)=>{
                   let ascale = a.Sales.indexOf("万") !=-1?a.Sales.substr(0,a.Sales.length-1)*10000:a.Sales;
                   let bscale = b.Sales.indexOf("万") !=-1?b.Sales.substr(0,b.Sales.length-1)*10000:b.Sales;
                   return ascale - bscale
               })
            }else{
                this.iscurrent = true;
                this.iscurrentse = false;
                this.iscurrents = false;
                 this.detaillist= this.detaillist;
            }
        }
    }
}
</script>
<style  lang="scss">
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
  display: flex;
  flex-direction: column; 
  header{
      width:100%;
      height:100px;
      h2{
          width:100%;
          height:40px;
          line-height:40px;
          
      }
      ul{
          width:100%;
          height:58px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
              border-right:1px solid #ccc;
             width:20%;
             text-align:center;
          }
          .current{
              color:red;
          }
          .currents{
              color:red;
          }
          .currentse{
              color:red;
          }

      }
  }
  section{
      flex:1;
      width:100%;
      
      overflow: scroll;
      .scroll{
          width:100%;
          height:100%;
         dl{
             width:100%;
             height:120xp;
             display: flex;
             justify-content: space-between;
             align-items: center;
             dt{
                 width:30%;
                 height:100%;
                 img{
                     width:100%;
                     height:100%;
                 }
             }
             dd{
                 width:70%;
                 display: flex;
                 flex-direction: column;
                 p:nth-child(2){
                     font-size:16px;
                 }
                 .orange{
                     color:orange
                 }
             }
         }
      }
  }
  }

</style>