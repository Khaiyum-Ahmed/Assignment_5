// console.log('donate js added')

// header section ............

//  Blog Button ........

document.getElementById('blog-button').addEventListener('click', function(){
    window.location.href = '/blog.html';
});


// donation button and history button....

// history button...

document.getElementById('history-button').addEventListener('click', function(){
    // button design swap
    document.getElementById('history-button').classList.remove('default');
    document.getElementById('history-button').classList.add('active');
    document.getElementById('donation-button').classList.remove('active');
    document.getElementById('donation-button').classList.add('default');

    // button section swap
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('history-container').classList.remove('hidden');

    
});

document.getElementById('donation-button').addEventListener('click', function(){
    // button design swap
    document.getElementById('donation-button').classList.remove('default');
    document.getElementById('donation-button').classList.add('active');
    document.getElementById('history-button').classList.remove('active');
    document.getElementById('history-button').classList.add('default');
    
    // button section swap
    document.getElementById('donation-card').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
    
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
        return;
    }

    else if(donateAmount > mainBalance){
        alert('Insufficient Balance to Donate');
        document.getElementById('input-donate-noakhali').value = '';
        return;
    }


    const totalDonationAmount = totalDonation + donateAmount;
    const remainingMainBalance = mainBalance - donateAmount;


    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('noakhali-balance').innerText = totalDonationAmount;

    // modal 



      // history.....

    const div = document.createElement('div');
    let now = new Date();
    div.innerHTML = `
        <div class = "mb-6">
            <h2 class="text-xl font-semibold text-[#111] mb-4 " > ${donateAmount} Taka is Donated for Flood at Noakhali, Bangladesh</h2>
            <p class ="text-[rgba(17,17,17,.7)] text-base font-light "> Date ${now} </P>
        </div>
    `;
    
    document.getElementById('content-container').appendChild(div);

   


    // const paragraph = document.createElement('p');
    // const DonationTime = new date();
    // paragraph.innerText = ` ${donateAmount} Taka is Donated for Flood at Noakhali, Bangladesh`;

    // document.getElementById('content-container').appendChild(paragraph);



    document.getElementById('input-donate-noakhali').value = '';


});


// Feni donation section.........

document.getElementById('feni-button').addEventListener('click', function(){

    const donateAmount = getInputFieldValue('input-donate-feni');
    // console.log(donateAmount);

    const totalDonation = getBalanceValue('feni-balance');
    // console.log(totalDonation)

    // main-balance
    const mainBalance = getMainBalanceValue('main-balance');
    // console.log(mainBalance)

    if(isNaN(donateAmount)){
        alert('Invalid Donation, please try again');
        document.getElementById('input-donate-feni').value = '';
        return;
    }

    else if(donateAmount > mainBalance){
        alert('Insufficient Balance to Donate');
        document.getElementById('input-donate-feni').value = '';
        return;
    }


    const totalDonationAmount = totalDonation + donateAmount;
    const remainingMainBalance = mainBalance - donateAmount;


    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('feni-balance').innerText = totalDonationAmount;

    // modal 



      // history.....

    const div = document.createElement('div');
    let now = new Date();
    div.innerHTML = `
        <div class = "mb-6">
            <h2 class="text-xl font-semibold text-[#111] mb-4 " > ${donateAmount} Taka is Donated for Flood Relief in Feni, Bangladesh</h2>
            <p class ="text-[rgba(17,17,17,.7)] text-base font-light "> Date ${now} </P>
        </div>
    `;
    
    document.getElementById('content-container').appendChild(div);



    document.getElementById('input-donate-feni').value = '';
});




// Aid for injured section.........

document.getElementById('aid-injured-button').addEventListener('click', function(){

    const donateAmount = getInputFieldValue('input-donate-aid');
    // console.log(donateAmount);

    const totalDonation = getBalanceValue('aid-injured-balance');
    // console.log(totalDonation)

    // main-balance
    const mainBalance = getMainBalanceValue('main-balance');
    // console.log(mainBalance)

    if(isNaN(donateAmount)){
        alert('Invalid Donation, please try again');
        document.getElementById('input-donate-aid').value = '';
        return;
    }

    else if(donateAmount > mainBalance){
        alert('Insufficient Balance to Donate');
        document.getElementById('input-donate-aid').value = '';
        return;
    }


    const totalDonationAmount = totalDonation + donateAmount;
    const remainingMainBalance = mainBalance - donateAmount;


    document.getElementById('main-balance').innerText = remainingMainBalance;
    document.getElementById('aid-injured-balance').innerText = totalDonationAmount;

    // modal 



      // history.....

    const div = document.createElement('div');
    let now = new Date();
    div.innerHTML = `
        <div class = "mb-6">
            <h2 class="text-xl font-semibold text-[#111] mb-4 " > ${donateAmount} Taka is Donated for Aid for Injured in the quota Movement</h2>
            <p class ="text-[rgba(17,17,17,.7)] text-base font-light "> Date ${now} </P>
        </div>
    `;
    
    document.getElementById('content-container').appendChild(div);



    document.getElementById('input-donate-aid').value = '';
});