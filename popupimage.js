// popup image code start here

let pop = document.querySelectorAll('.clicked');
let popConvert = Array.from(pop);

popConvert.map((popup)=>{

    let popImg = (a)=>{
        if (key) {
            popup.innerHTML += `<div class="imageview">
            <div class="close">X</div>
            <img src="${popup.dataset.images}" alt="">
        </div>`;
        key = false;
        }else{
            if(a.target.className == "close" || a.target.className == "imageview"){
                let imageview = document.querySelector(".imageview");
                imageview.remove();
                key = true;
            }

        }
    }

    popup.addEventListener("click",popImg);
    let key = true;
})

// popup image code end here