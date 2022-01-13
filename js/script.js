new Vue({
    el:"#app",
    data:{
        message:"Hello Vue",
        nome:'',
        img:'https://unsplash.it/300/300?image=120',
    },
    methods:{
        saluta: function(){
            alert( "Hello " + this.nome)
        }
    }
})