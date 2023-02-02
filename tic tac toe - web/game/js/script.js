function main() {
    const boxes = document.querySelectorAll('.item');
    const arr = Array.from(boxes);
    let tracking = [1,2,3,4,5,6,7,8,9];

    boxes.forEach(item => {
        item.addEventListener('click', (e)=>{
            //player
            const index = arr.indexOf(e.target);
            boxes[index].classList.add('X');
            // document.getElementById(index).classList.add('X');
            eliminate = tracking.indexOf(index+1);
            document.getElementById(index).onclick = tracking.splice(eliminate, 1);

            if (Wins('X',boxes,tracking)) {
                document.getElementById('player').innerText = "WIN";
                reset();
            }


            // tie
            if (tracking.length == 0 & (document.getElementById('player').innerText == "0") & (document.getElementById('comp').innerText == "0") ) {
                document.getElementById('t').innerText = "TIE";
                reset();
            }


            // computer
            function c_index(track) {
                if ((document.getElementById('player').innerText == "WIN")) {
                    return null;
                }
                else{
                    c = Math.floor(Math.random()*track.length)
                    return track[c];
                }
            }
            const computer_index = c_index(tracking);
            boxes[computer_index-1].classList.add('O');
            eliminate_c = tracking.indexOf(computer_index);
            document.getElementById(index).onclick = tracking.splice(eliminate_c, 1);

            if (Wins('O',boxes,tracking)) {
                document.getElementById('comp').innerText = "WIN";
                reset();
            }

        })
    })
}

function Wins(player,items,array) {
    function check(a,b,c) {
        if (player == 'X') {
            if (items[a].classList.contains('X') & items[b].classList.contains('X') & items[c].classList.contains('X')) {
                return true;
            }
        }
        else if (player == 'O') {
            if (items[a].classList.contains('O') & items[b].classList.contains('O') & items[c].classList.contains('O')) {
                return true;
            }
        }
    }
    if(check(0,1,2)){
        return true;
    }
    else if(check(3,4,5)){
        return true;
    }
    else if(check(6,7,8)){
        return true;
    }
    else if(check(0,3,6)){
        return true;
    }
    else if(check(1,4,7)){
        return true;
    }
    else if(check(2,5,8)){
        return true;
    }
    else if(check(0,4,8)){
        return true;
    }
    else if(check(2,4,6)){
        return true;
    }
}


function reset() {
    setTimeout(() => {
        alert('Click OK to reset.');
    }, 0000);
    setTimeout(() => {
        location.reload();
    }, 1000);
}

main();