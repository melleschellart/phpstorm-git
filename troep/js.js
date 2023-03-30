function myfunction() {  
      let name = document.getElementById("name");    
      let numCorrect = 0;    let numIncorrect = 0;   
       let correctAnswers = ['c', 'a', 'a', 'a', 'b', 'd', 'c', 'c', 'b', 'd'];    
       
       
       
       
       
    for (let i = 1; i <= 10; i++) {        
        let question = document.querySelector(`input[name="question${i}"]:checked`).value;       
        if (question === correctAnswers[i - 1]) {
                        
            numCorrect++;        
        } else {            
            numIncorrect++;        
        }    }    
        
        
        

        alert( name.value +   + "You got " + numCorrect + " answers correct and " + numIncorrect + " answers incorrect");}