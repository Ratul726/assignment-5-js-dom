// console.log('hello')
document.getElementById('scrollButton').addEventListener('click',function(){
    document.getElementById('bottom-section').scrollIntoView({ behavior: 'smooth' });
});
let count = 0;
let costSeat = 8;

const allBtn = document.getElementsByClassName('add-btn')
console.log(allBtn)
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
    totalCostEl.innerText = convertedTotal + 550;


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


  const buttons = document.querySelectorAll('.my-Button');
  let selectedCount = 0;
  selectedCount++;

    // ৪ টির বেশি সিলেক্ট করা হলে
    if (selectedCount > 4) {
        // একটি এলার্ট দিন
        alert(`আপনি ৪ টির বেশি বাটন সিলেক্ট করেছেন!`);
        
        
    }

  