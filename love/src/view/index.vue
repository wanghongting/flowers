<template>
  <div class="wraps">
    <header>
      <img :src="imgurl" alt>
    </header>
    <section>
      <ul>
        <li :class='{active:active===index}' v-for="(item,index) in list" :key="index">{{item.LabelName}}</li>
      </ul>
      <swiper :options="swiperOption"> 
      <swiper-slide v-for="(item,index) in list" :key='index'><img :src="item.ImageUrl" alt="" class='slides' @click='$router.push({name:"detail",params:{type:item.Type}})'></swiper-slide>
   
  </swiper>

    </section>
    <ul class="footer" ref='ulwidth'> 
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/classfiy" tag="li">分类</router-link>
      <router-link to="/main" tag="li">首页</router-link>
    </ul>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BetterScroll from "better-scroll"

export default {
    components: {
    swiper,
    swiperSlide
  },
  data() {
      let that = this;
    return {
      list: [],
      imgurl: "",
      urlwidth:0,
      active:0,
      scroll:null,
       swiperOption: {
       autoplay:true,
       on: {
    slideChangeTransitionStart: function(){
      that.active = this.activeIndex;
    // that.scrollToElement(this.)
    },
  },
        }
    };
  },
  created() {       
    this.$app.get("/api/list").then(res => {
            this.list = res.data.data.BannerList;
            this.imgurl = res.data.data.TopPic; 
         this.$nextTick(()=>{                  
         
            this.scroll = new BetterScroll('section',{
                click:true,
                scrollX:true
            })   
    })
    });
    
  }
};
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
.wraps {
  width: 100%;
  height: 100%;
}
.wraps {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  section{
      width:100%;
      flex:1;
      ul{
        width:600px;
         height:50px;
         display:flex;
        justify-content: space-between;
        align-items: center;
      li{
          flex-shrink: 0;
            width:100px;
            padding:8px 0px;
         
      }
      li.active{
          color:red;
          border-bottom:1px solid red;
      }
      }
      .slides{
          width:100%;
          height:400px;
          padding:6px 12px;
          text-align:center;
          img{
              width:80%;
              padding:0 12px;
              
          }
      }

  }
 
}
 .footer{
      width:100%;
      height:50px;
     
      display:flex;
      justify-content: space-between;
      align-items: center;

  }
</style>