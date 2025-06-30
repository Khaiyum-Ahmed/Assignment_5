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
    console.log(donateAmount);

    const totalDonation = getBalanceValue('noakhali-balance');
    console.log(totalDonation)

    if(isNaN(donateAmount)){
        alert('Invalid Donation, please try again');
        return;
    }

    const totalDonationAmount = totalDonation + donateAmount;

    document.getElementById('noakhali-balance').innerText = totalDonationAmount;



    document.getElementById('input-donate-noakhali').value = '';
})