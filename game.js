const car = document.querySelector(".car")
const ground = document.querySelector(".ground")
const carImg = document.querySelector(".car img")
let flag = true


document.body.addEventListener("keydown", (e)=>{
    if (e.code === "Enter"){
        if(!ground.classList.contains("right")){
            ground.classList.add("right")
            car.classList.add("swing")
        }else{
            ground.classList.remove("right")
            car.classList.remove("swing")
        }
    }
})
document.body.addEventListener("dblclick", (e) => {
    
        if(flag){
            carImg.setAttribute("src", "./img/img_06.png")
            flag = false
        }else{
            carImg.setAttribute("src", "./img/img_05.png")
            flag = true
        }
    
})
document.body.addEventListener("keydown", (e) => {
    if (e.code === "Space"){
            car.classList.toggle("jump")
        }  
        
})
