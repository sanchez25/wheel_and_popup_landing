window.onload = function () {

    var button = document.querySelector('.btn');
    button.onclick = function () {
        if ( $('.wheel-btn').hasClass('first-spin') ) {
            spin_1();
        }
    };

    function spin_1 () {
        $('.wheel-btn').attr('disabled','disabled');
        document.querySelector('.wheel-img').classList.add('wheel-img-animated-1');
        setTimeout(function () {
            localStorage.currentSpin = '9560_spin_1';
            $('.wheel-modal').css('display','flex');
            $('#modal-1').css('display','flex');
           $('.btn').removeClass('first-spin');
        }, 4000);
    }

    switch(localStorage.currentSpin) {
        case '9560_spin_1':
            $('.wheel-modal').css('display','flex');
            $('#modal-1').css('display','flex');
            $('.btn').removeClass('first-spin');
        break;
    }

};