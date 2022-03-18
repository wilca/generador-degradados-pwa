const app = Vue.createApp({
    data: () => ({
        title: "Gradient Gen",
        color1: "#40eF12",
        color2: "#5481e8",
        orientation: 1
    }),
    computed: {
        setColor(){
            if(1 == this.orientation){
                return `background: linear-gradient(to right, ${this.color1}, ${this.color2});`
            }
            if(2 == this.orientation){
                return `background: linear-gradient(to left, ${this.color1}, ${this.color2});`
            }
            if(3 == this.orientation){
                return `background: linear-gradient(to top, ${this.color1}, ${this.color2});`
            }
            if(4 == this.orientation){
                return `background: linear-gradient(to bottom, ${this.color1}, ${this.color2});`
            }
        }
    }
});