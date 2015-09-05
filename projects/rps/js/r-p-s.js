window.onload = function () {

(function() {
    
    var choices = ['rock','paper', 'scissors'];
    var userResult = 0;
    var computerResult = 0;
    var status = document.getElementById('status');
    var userScore = document.getElementById('userScore');
    var computerScore = document.getElementById('computerScore');   

    var update = function() {
        userScore.innerHTML = userResult;
        computerScore.innerHTML = computerResult;

    }

    var game = function(user) {
        return function() {
            var result;
            var computer = Math.floor(Math.random() * 3);
              if (user === computer) {
                result = 'Nobody';
                                     }
                 else if (computer < user && !(computer === 0 && user === 2)) 
                 {
                    result = 'Win';
                    userResult++;
                 } else {
                    result = 'Lose';
                    computerResult++;
                         };
                        
            //status.innerHTML = 'Your choice is ' + choices[user] + ". Computer's choice is " + choices[computer] + '.' + result;
          //  alert( 'Your choice is ' + choices[user] + ". Computer's choice is " + choices[computer] + '.' + result);
            swal(result, 'Your choice is ' + choices[user] + ". Computer's choice is " + choices[computer] + '.');
            update();
                    };
        }
    document.getElementById('rock').onclick = game(0);
    document.getElementById('paper').onclick = game(1);
    document.getElementById('scissors').onclick = game(2);


}());

};