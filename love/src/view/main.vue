<template>
    <div>
        <p v-for="(it,indx) in mainlist" :key='indx'>{{it}}</p> 
    </div>
</template>

<script>

export default {
    data(){
        return {
            mainlist:[],
        }
    },
    created(){
        this.mainlist= JSON.parse(localStorage.getItem('mainlist'))|| []
        console.log(this.mainlist)
    }
}
</script>
<style  lang="scss">

</style>