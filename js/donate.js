// console.log('donate js added')

// header section ............

//  Blog Button ........

document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = '/blog.html';
});



// 
// getInputFieldValue('input-donate-noakhali')


// noakhali donation 

document.getElementById('noakhali-btn').addEventListener('click', function(){
    // console.log('noakhali donate now');

    const donateAmount = getInputFieldValue('input-donate-noakhali');
    // console.log(donateAmount);

    const totalDonation = getBalanceValue('noakhali-balance');
    // console.log(totalDonation)

    // main-balance
    const mainBalance = getMainBalanceValue('main-balance');
    // console.log(mainBalance)

    if(isNaN(donateAmount)){
        alert('Invalid Donation, please try again');
        document.getElementById('input-donate-noakhali').value = '';
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }

    else if(donateAmount > mainBalance){
        alert('Insufficient Balance to Donate');
        document.getElementById('input-donate-noakhali').value = '';
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    }


    const totalDonationAmount = totalDonation + donateAmount;
    const remainingMainBalance = mainBalance - donateAmount;


    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('noakhali-balance').innerText = totalDonationAmount;

    // modal 

    // const modal = my_modal_1.showModal();
    // return modal;

    document.getElementById('noakhali-btn-close').addEventListener('click', function(){
        document.getElementById('my_modal_1').classList.add('hidden');
        return;
    });
    document.getElementById('input-donate-noakhali').value = '';

})