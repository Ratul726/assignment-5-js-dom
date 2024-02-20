// console.log('hello')
document.getElementById('scrollButton').addEventListener('click',function(){
    document.getElementById('bottom-section').scrollIntoView({ behavior: 'smooth' });
});
let count = 0;
let costSeat = 8;
const toto = 550;

const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn)
for(const btn of allBtn){
    // console.log(btn)
    btn.addEventListener('click',function(e){
    
        count += 1;
        costSeat -=1;
        const color = e.target.classList.add('bg-green-500','text-white');
        const selectedContainer = document.getElementById('selected-place-container');

          let seatName = e.target.innerText;
        // console.log(e.target.innerText);

        // const selectedContainer = document.getElementById('selected-place-container');

        const li =document.createElement('li');
     const  p = document.createElement('p');
    p.innerText = seatName;
    const p2 =document.createElement('p');
    p2.innerText = 'Economy';
    const p3 =document.createElement('p');
    p3.innerText =parseInt('550');
    
    li.classList.add('flex','gap-28','ml-16')
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedContainer.appendChild(li);


    const totalCostEl = document.getElementById('total-cost');
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotal = parseInt(totalCost);
    const price = totalCostEl.innerText = convertedTotal + 550;
    console.log(price)


    const grandTotalEl = document.getElementById('grand-total');
    const grandTotal = document.getElementById('grand-total').innerText;
     const convertedGrandTotal = parseInt(grandTotal);
     grandTotalEl.innerText = convertedGrandTotal + 550;



        setInnerText('cart-count',count)
        setInnerText('costSeat',costSeat)
    })
}

function setInnerText (id,value){
    document.getElementById(id).innerText = value;
  }

  let clickCount = 0
function countClicks(){
clickCount ++;
if(clickCount>4){
    alert('You can selected max four seats');
    
}
}


// let popup = document.getElementById('popup');
// function openPopup(){

// }


// function hideElementById(e){
//     const el =document.getElementById(e)
//     el.classList.add('hidden')
// }

// function showElementById(e){
//     const el =document.getElementById(e);
//     el.classList.remove('hidden')
// }
// function play() {
//     hideElementById('home-screen');
//     showElementById('play-ground');
    
// }

function play(){
    const homeSection = document.getElementById('home-screen')
    // homeSection.classList.add('hidden')
    homeSection.style.display= 'none';

}
//  console.log('hello')

function da (){
    const cpnBtn = document.getElementById('cpn-btn')
cpnBtn.addEventListener('click',function(){
    

    const cpnCode = document.getElementById('cpn-code').value;
    
    const couponElement = cpnCode.toUpperCase()
    console.log(couponElement)
    if(toto >= 550){
        if(couponElement === "NEW20"){
             const discount = price * 0.15;

             const grandTotal = document.getElementById('grand-total');
             grandTotal.innerText = price - discount
        }
        else{
            alert('invalid coupon')
        }
    }
})

}


function ma (){
    const cpnBtn2 = document.getElementById('cpn-btn')
cpnBtn.addEventListener('click',function(){
    

    const cpnCode = document.getElementById('cpn-code').value;
    
    const couponElement = cpnCode.split(' ').join('')
    console.log(couponElement)
    if(toto >= 550){
        if(couponElement === "couple 20"){
             const discount = price * 0.2
        }
        // else{
        //     alert('invalid coupon')
        // }
    }
})
}



// const buttons =document.querySelectorAll('.my-button');
// buttons.forEach(button =>{
//     button.addEventListener('click',()=>{
//         if(button.style.backgroundColor !== 'green'){
//             if(clickCount < 4){
//                 button.style.backgroundColor = 'green';
//                 clickCount ++;
//             }else{
//                 alert('You can selected max four seats')
//             }
            
//         }
//     })
// })
  

