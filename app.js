let box = document.querySelector('#box');
let boxTop = document.querySelector('#box-top')
let screen = document.querySelector('#screen')
let restart = document.querySelector('#restart')
let red = 0;
let yellow = 0;
let gameOver = 0;
restart.addEventListener('click', () => {
    location.reload();
})

function whosTurn(){
    if(red <= yellow){
        screen.innerText = 'Red'
    }else if(red > yellow){
        screen.innerText = 'Yellow'
    }
}
whosTurn();


for(let i = 1; i <= 7; i++){
    let square = document.createElement('div');
    square.classList.add('square', 'top');
    square.setAttribute('id', `a${i}`);
    boxTop.append(square)

}
for(let i = 1; i <= 42; i++){
    let square = document.createElement('div');
    let row = i < 8 ? 1 : i < 15 ? 2 : i < 22 ? 3 : i < 29 ? 4 : i < 36 ? 5 : 6;
    square.setAttribute('data-row', row)
    square.classList.add('square');
    square.setAttribute('id', i);
    square.addEventListener('mouseover', mouseOver)
    square.addEventListener('click', click)
    box.append(square);
}

let globalarr = []
let globalarrSort;
function mouseOver(e){
    globalarr = [];
    let id = parseInt(e.target.id);
    
    let one = document.querySelector(`[id='${id + 7}']`)
    let two = document.querySelector(`[id='${id + 14}']`)
    let three = document.querySelector(`[id='${id + 21}']`)
    let four = document.querySelector(`[id='${id + 28}']`)
    let five = document.querySelector(`[id='${id + 35}']`)
    let six = document.querySelector(`[id='${id - 7}']`)
    let seven = document.querySelector(`[id='${id - 14}']`)
    let eight = document.querySelector(`[id='${id - 21}']`)
    let nine = document.querySelector(`[id='${id - 28}']`)
    let ten = document.querySelector(`[id='${id - 35}']`)
    

    /*
    !e.target.classList.contains('red') && !e.target.classList.contains('yellow') ? e.target.classList.add('hover') && arr.push(id) : '';
    one && !one.classList.contains('red') && !one.classList.contains('yellow') ? one.classList.add('hover') && arr.push(id + 7): '';
    two && !two.classList.contains('red') && !two.classList.contains('yellow') ? two.classList.add('hover') && arr.push(id + 14): '';
    three && !three.classList.contains('red') && !three.classList.contains('yellow') ? three.classList.add('hover') && arr.push(id + 21): '';
    four && !four.classList.contains('red') && !four.classList.contains('yellow') ? four.classList.add('hover') && arr.push(id + 28): '';
    five && !five.classList.contains('red') && !five.classList.contains('yellow') ? five.classList.add('hover') && arr.push(id + 35): '';
    six && !six.classList.contains('red') && !six.classList.contains('yellow') ? six.classList.add('hover') && arr.push(id - 7): '';
    seven && !seven.classList.contains('red') && !seven.classList.contains('yellow') ? seven.classList.add('hover') && arr.push(id - 14): '';
    eight && !eight.classList.contains('red') && !eight.classList.contains('yellow') ? eight.classList.add('hover') && arr.push(id - 21): '';
    nine && !nine.classList.contains('red') && !nine.classList.contains('yellow') ? nine.classList.add('hover') && arr.push(id - 28): '';
    ten && !ten.classList.contains('red') && !ten.classList.contains('yellow') ? ten.classList.add('hover') && arr.push(id - 35): '';
    */
    if (!e.target.classList.contains('red') && !e.target.classList.contains('yellow')) {
        e.target.classList.add('hover');
        globalarr.push(id);
    }
    
    if (one && !one.classList.contains('red') && !one.classList.contains('yellow')) {
        one.classList.add('hover');
        globalarr.push(id + 7);
    }
    
    if (two && !two.classList.contains('red') && !two.classList.contains('yellow')) {
        two.classList.add('hover');
        globalarr.push(id + 14);
    }
    
    if (three && !three.classList.contains('red') && !three.classList.contains('yellow')) {
        three.classList.add('hover');
        globalarr.push(id + 21);
    }
    
    if (four && !four.classList.contains('red') && !four.classList.contains('yellow')) {
        four.classList.add('hover');
        globalarr.push(id + 28);
    }
    
    if (five && !five.classList.contains('red') && !five.classList.contains('yellow')) {
        five.classList.add('hover');
        globalarr.push(id + 35);
    }
    
    if (six && !six.classList.contains('red') && !six.classList.contains('yellow')) {
        six.classList.add('hover');
        globalarr.push(id - 7);
    }
    
    if (seven && !seven.classList.contains('red') && !seven.classList.contains('yellow')) {
        seven.classList.add('hover');
        globalarr.push(id - 14);
    }
    
    if (eight && !eight.classList.contains('red') && !eight.classList.contains('yellow')) {
        eight.classList.add('hover');
        globalarr.push(id - 21);
    }
    
    if (nine && !nine.classList.contains('red') && !nine.classList.contains('yellow')) {
        nine.classList.add('hover');
        globalarr.push(id - 28);
    }
    
    if (ten && !ten.classList.contains('red') && !ten.classList.contains('yellow')) {
        ten.classList.add('hover');
        globalarr.push(id - 35);
    }
    
    

    globalarrSort = globalarr.sort((a,b) => a - b)
    
    let topSquare = document.querySelector(`#a${globalarrSort[0]}`)
    
    function redYellow(){
        if(globalarrSort[0] <= 7){
            if(red <= yellow){
                topSquare.classList.add('red')
            }else if(red > yellow){
                topSquare.classList.add('yellow');
            }
        }
    }
    redYellow();
    


    let top = document.querySelectorAll('.top')
    top.forEach((square) =>{
        if(square === topSquare){
            
            return
        }else{
            square.classList.remove('red')
            square.classList.remove('yellow');
        }
    })
 
    
    let square = document.querySelectorAll('.square')
    square.forEach((square) => {
        if(square === e.target || square === one || square === two || square === three || square === four || square === five || square === six || square === seven || square === eight || square === nine || square === ten){
            return
        }else{
            square.classList.remove('hover')
        }
    })
    
}

function click(e){
    if(gameOver > 0){
        return;
    }
    let id = parseInt(e.target.id);
    
    let one = document.querySelector(`[id='${id + 7}']`)
    let two = document.querySelector(`[id='${id + 14}']`)
    let three = document.querySelector(`[id='${id + 21}']`)
    let four = document.querySelector(`[id='${id + 28}']`)
    let five = document.querySelector(`[id='${id + 35}']`)
    let six = document.querySelector(`[id='${id - 7}']`)
    let seven = document.querySelector(`[id='${id - 14}']`)
    let eight = document.querySelector(`[id='${id - 21}']`)
    let nine = document.querySelector(`[id='${id - 28}']`)
    let ten = document.querySelector(`[id='${id - 35}']`)


    let arr = [];
    !e.target.classList.contains('red') && !e.target.classList.contains('yellow') ? arr.push(id) : '';
    one && !one.classList.contains('red') && !one.classList.contains('yellow') ? arr.push(id + 7) : '';
    two && !two.classList.contains('red') && !two.classList.contains('yellow') ? arr.push(id + 14) : '';
    three && !three.classList.contains('red') && !three.classList.contains('yellow') ? arr.push(id + 21): '';
    four && !four.classList.contains('red') && !four.classList.contains('yellow') ?  arr.push(id + 28): '';
    five && !five.classList.contains('red') && !five.classList.contains('yellow') ?  arr.push(id + 35): '';
    six && !six.classList.contains('red') && !six.classList.contains('yellow') ? arr.push(id - 7): '';
    seven && !seven.classList.contains('red') && !seven.classList.contains('yellow') ? arr.push(id - 14): '';
    eight && !eight.classList.contains('red') && !eight.classList.contains('yellow') ? arr.push(id - 21): '';
    nine && !nine.classList.contains('red') && !nine.classList.contains('yellow') ?  arr.push(id - 28): '';
    ten && !ten.classList.contains('red') && !ten.classList.contains('yellow') ? arr.push(id - 35): '';
    let sortArr = arr.sort((a, b) => b - a);
    if(sortArr.length === 0){
        return;
    }
    let square = document.querySelector(`[id='${sortArr[0]}']`)
    let squareTop = document.querySelector(`#a${globalarrSort[0]}`)
    if(red <= yellow){
        red++
        squareTop.classList.contains('red') ? squareTop.classList.remove('red') : '';
        squareTop.classList.add('yellow')
        square.classList.add('red')
        whosTurn();
        if(check(sortArr[0], 'red') === true){
            screen.innerText = 'Red Wins';
            gameOver++;
        }
    }else if(red > yellow){
        yellow++;
        squareTop.classList.contains('yellow') ? squareTop.classList.remove('yellow') : '';
        squareTop.classList.add('red')
        square.classList.add('yellow')
        whosTurn();
        if(check(sortArr[0], 'yellow') === true){
            screen.innerText = 'Yellow Wins';
            gameOver++;
        }
    }
}

function check(id, color){
    let count = 0;
    function one(){
        let one = document.querySelector(`[id='${id + 7}']`)
        let two = document.querySelector(`[id='${id + 14}']`)
        let three = document.querySelector(`[id='${id + 21}']`)
        let four = document.querySelector(`[id='${id - 7}']`)
        let five = document.querySelector(`[id='${id - 14}']`)
        let six = document.querySelector(`[id='${id - 21}']`)
        
        one && one.classList.contains(color) ? count++ : '';
        two && one.classList.contains(color) && two.classList.contains(color) ? count++ : '';
        three && one.classList.contains(color) && two.classList.contains(color) && three.classList.contains(color) ? count++ : '';
        four && four.classList.contains(color) ? count++ : '';
        five && four.classList.contains(color) && five.classList.contains(color) ? count++ : '';
        six && four.classList.contains(color) && five.classList.contains(color) && six.classList.contains(color) ? count++ : '';
    }
    one()
    if(count >= 3){
        return true;
    }else{
        count = 0;
    }

    function two(){
        let zero = document.querySelector(`[id='${id}']`)
        let one = document.querySelector(`[id='${id + 1}']`)
        let two = document.querySelector(`[id='${id + 2}']`)
        let three = document.querySelector(`[id='${id + 3}']`)
        let four = document.querySelector(`[id='${id - 1}']`)
        let five = document.querySelector(`[id='${id - 2}']`)
        let six = document.querySelector(`[id='${id - 3}']`)
        
        one && zero.getAttribute('data-row') === one.getAttribute('data-row') && one.classList.contains(color) ? count++ : '';
        two && zero.getAttribute('data-row') === two.getAttribute('data-row') && one.classList.contains(color) && two.classList.contains(color) ? count++ : '';
        three && zero.getAttribute('data-row') === three.getAttribute('data-row') && one.classList.contains(color) && two.classList.contains(color) && three.classList.contains(color) ? count++ : '';
        four && zero.getAttribute('data-row') === four.getAttribute('data-row') && four.classList.contains(color) ? count++ : '';
        five && zero.getAttribute('data-row') === five.getAttribute('data-row') && four.classList.contains(color) && five.classList.contains(color) ? count++ : '';
        six && zero.getAttribute('data-row') === six.getAttribute('data-row') && four.classList.contains(color) && five.classList.contains(color) && six.classList.contains(color) ? count++ : '';
    }
    two();
    if(count >= 3){
        return true;
    }else{
        count = 0;
    }

    function three(){
        let zero = document.querySelector(`[id='${id}']`)
        let one = document.querySelector(`[id='${id + 8}']`)
        let two = document.querySelector(`[id='${id + 16}']`)
        let three = document.querySelector(`[id='${id + 24}']`)
        let four = document.querySelector(`[id='${id - 8}']`)
        let five = document.querySelector(`[id='${id - 16}']`)
        let six = document.querySelector(`[id='${id - 24}']`)
        
        one && parseInt(zero.getAttribute('data-row')) + 1 === parseInt(one.getAttribute('data-row')) && one.classList.contains(color) ? count++ : '';
        two && parseInt(zero.getAttribute('data-row')) + 2 === parseInt(two.getAttribute('data-row')) && one.classList.contains(color) && two.classList.contains(color) ? count++ : '';
        three && parseInt(zero.getAttribute('data-row')) + 3 === parseInt(three.getAttribute('data-row')) && one.classList.contains(color) && two.classList.contains(color) && three.classList.contains(color) ? count++ : '';
        four && parseInt(zero.getAttribute('data-row')) - 1 === parseInt(four.getAttribute('data-row')) && four.classList.contains(color) ? count++ : '';
        five && parseInt(zero.getAttribute('data-row')) - 2 === parseInt(five.getAttribute('data-row')) && four.classList.contains(color) && five.classList.contains(color) ? count++ : '';
        six && parseInt(zero.getAttribute('data-row')) - 3 === parseInt(six.getAttribute('data-row')) && four.classList.contains(color) && five.classList.contains(color) && six.classList.contains(color) ? count++ : '';
    }
    
    three();
    if(count >= 3){
        return true;
    }else{
        count = 0;
    }

    function four(){
        let zero = document.querySelector(`[id='${id}']`)
        let one = document.querySelector(`[id='${id + 6}']`)
        let two = document.querySelector(`[id='${id + 12}']`)
        let three = document.querySelector(`[id='${id + 18}']`)
        let four = document.querySelector(`[id='${id - 6}']`)
        let five = document.querySelector(`[id='${id - 12}']`)
        let six = document.querySelector(`[id='${id - 18}']`)
        
        one && parseInt(zero.getAttribute('data-row')) + 1 === parseInt(one.getAttribute('data-row')) && one.classList.contains(color) ? count++ : '';
        two && parseInt(zero.getAttribute('data-row')) + 2 === parseInt(two.getAttribute('data-row')) && one.classList.contains(color) && two.classList.contains(color) ? count++ : '';
        three && parseInt(zero.getAttribute('data-row')) + 3 === parseInt(three.getAttribute('data-row')) && one.classList.contains(color) && two.classList.contains(color) && three.classList.contains(color) ? count++ : '';
        four && parseInt(zero.getAttribute('data-row')) - 1 === parseInt(four.getAttribute('data-row')) && four.classList.contains(color) ? count++ : '';
        five && parseInt(zero.getAttribute('data-row')) - 2 === parseInt(five.getAttribute('data-row')) && four.classList.contains(color) && five.classList.contains(color) ? count++ : '';
        six && parseInt(zero.getAttribute('data-row')) - 3 === parseInt(six.getAttribute('data-row')) && four.classList.contains(color) && five.classList.contains(color) && six.classList.contains(color) ? count++ : '';
    }
    four()
    if(count >= 3){
        return true;
    }else{
        count = 0;
    }





}


let one = document.querySelector("[data-row='2']")

console.log(parseInt(one.getAttribute('data-row')))



//setInterval(whosTurn, 100)

