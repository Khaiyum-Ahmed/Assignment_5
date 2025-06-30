// console.log('function js added');

// get input value.......

function getInputFieldValue (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

// get Main Balance value......

function getMainBalanceValue (id){
    const balanceValue = document.getElementById(id).innerText;
    const mainBalanceNumber = parseFloat(balanceValue);
    return mainBalanceNumber;
};


// get secondary Balance value..........

function getBalanceValue(id){
    const secondaryBalance = document.getElementById(id).innerText;
    const donationBalance = parseFloat(secondaryBalance);
    return donationBalance;
}

// Donation button 

// function getButtonById (id){
//     const donate = document.getElementById(id).addEventListener('click', function(){
//         console.log('noakhali donate')
//     })
// }