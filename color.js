const buttons=document.querySelectorAll(".buttom")
const body=document.querySelector("body")
       
        buttons.forEach(function (buttom) {
            console.log(buttom)
            buttom.addEventListener('click',function(e){
            console.log(e)
            console.log(e.target)
            if (e.target.id==='aqua'){
                body.style.backgroundColor='aqua'           //'grey':e.target.id
            }
            if (e.target.id==='pink'){
                body.style.backgroundColor='pink'           
            }
            if (e.target.id==='purple'){
                body.style.backgroundColor=e.target.id           
            }
            if (e.target.id==='yellow'){
                body.style.backgroundColor='yellow'           
            }
            if (e.target.id==='blue'){
                body.style.backgroundColor='blue'           
            }
        })
    });