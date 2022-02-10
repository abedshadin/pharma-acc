let count = 0;
document.getElementById('deposit-button').addEventListener('click',function(){
count++;
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const depositInput = parseFloat(depositInputText);

    
    if(depositInputText == '' || depositInput <=0 ){
        alert('Please type valid amount');
    }
   
    else{
    // console.log(depositInput);
    const showDeposit = document.getElementById('deposit-show');
   const prevDeposit = showDeposit.innerText;
    
   const newDepositInput = parseFloat(prevDeposit);
   const totalDeposit = newDepositInput+depositInput;
   showDeposit.innerText = totalDeposit;

//    console.log(newDepositInput);

const showBalance = document.getElementById('balance-show');
const totalBalanceText = showBalance.innerText;
const totalBalanceDig = parseFloat(totalBalanceText);
const total = totalBalanceDig+depositInput;
showBalance.innerText = total;


depositInputField.value = '';


const mydate = new Date();
const date = mydate.toLocaleString();


const list = document.getElementById('tbody');
const newlist = document.createElement('tr');
newlist.innerHTML =`<td class="fw-bold">${count}</td><td class="fw-bold">${date}</td><td class=" fw-bold">$${depositInput}</td><td class="text-success  fw-bold">Deposit</td>`;
list.appendChild(newlist);
    }
});


document.getElementById('withdraw-button').addEventListener('click',function(){
    count++;
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawtInput = parseFloat(withdrawInputText);


    const showBalance = document.getElementById('balance-show');
const totalBalanceText = showBalance.innerText;
const totalBalanceDig = parseFloat(totalBalanceText);



    if(withdrawInputText == '' || withdrawtInput <=0 ){
        alert('Please type valid amount');
    }
    else if(totalBalanceDig < 0){
        alert("Don't Withdraw.......Already Negative Balance!!!!!");
    }
    else{
    // console.log(depositInput);
    const showWithdraw = document.getElementById('withdraw-show');
   const prevDeposit = showWithdraw.innerText;
    
   const newWithdrawInput = parseFloat(prevDeposit);
   const totalWithdraw = newWithdrawInput+withdrawtInput;
   showWithdraw.innerText = totalWithdraw;

//    console.log(newDepositInput);

const showBalance = document.getElementById('balance-show');
const totalBalanceText = showBalance.innerText;
const totalBalanceDig = parseFloat(totalBalanceText);
const total = totalBalanceDig-withdrawtInput;
showBalance.innerText = total;


withdrawInputField.value = '';


const mydate = new Date();
const date = mydate.toLocaleString();


const list = document.getElementById('tbody');
const newlist = document.createElement('tr');


newlist.innerHTML =`<td class="fw-bold">${count}</td><td class="fw-bold ">${date}</td><td class=" fw-bold">$${withdrawtInput}</td><td class="text-danger  fw-bold">Withdraw</td>`;
list.appendChild(newlist);


}
});

document.getElementById('clear').addEventListener('click',function(){
   const deleteAll = document.getElementsByTagName('tr');
   for(const deleteTR of deleteAll){
       deleteTR.remove();
   }
    });


