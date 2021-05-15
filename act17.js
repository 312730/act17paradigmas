const app = Vue.createApp({
    data(){
        return{
            status:true,
            imagen: "img/brutaloff.jpeg"
        }
    },
    methods:{
        cambiarStatus(){
            if(this.status == true{
                this.imagen = "img/brutaloff.jpeg"
                this.status = false
            }else{
                this.imagen = "img/brutalon.jpg"
                this.status = true
            }
        }
    }
})
const vm = app.mount('#app')