
let second = {
    picturesBlock: document.querySelector(".pictures"),
    picturesImg: [
        "image/image 2/1.jpg",
        "image/image 2/2.jpg",
        "image/image 2/3.jpg",
        "image/image 2/4.jpg",
        "image/image 2/5.jpg",
        "image/image 2/6.jpg",
        "image/image 2/7.jpg",
        "image/image 2/8.jpg",
        "image/image 2/9.jpg",
        "image/image 2/10.jpg",
        "image/image 2/11.jpg",
        "image/image 2/12.jpg",
        "image/image 2/13.jpg",
        "image/image 2/14.jpg",
        "image/image 2/15.jpg",
        "image/image 2/16.jpg",
        "image/image 2/17.jpg",
        "image/image 2/18.jpg",
        "image/image 2/19.jpg",
        "image/image 2/20.jpg",
        "image/image 2/21.jpg",
        "image/image 2/22.jpg",
        "image/image 2/23.jpg",
        "image/image 2/24.jpg",
        "image/image 2/25.jpg",
        "image/image 2/26.jpg",
        "image/image 2/27.jpg",
        "image/image 2/28.jpg",
        "image/image 2/29.jpg",
        "image/image 2/30.jpg",
        
    
    ],  
}
for (let i = 0; i < second.picturesImg.length; i++) {
    let img = document.createElement("img")
    second.picturesBlock.append(img)
    img.src = second.picturesImg[i]
}




