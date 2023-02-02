// document.getElementById('del').disabled = true;
// document.getElementById('t').disabled = false;

function del(j) {
    arr_str = localStorage.getItem('items'); 
    arr = JSON.parse(arr_str);
    arr.splice(j,1);
    localStorage.setItem('items',JSON.stringify(arr));
    document.getElementById("show").click();
    // console.log(j);
}

add.addEventListener('click', function () {
    item = document.getElementById('exampleFormControlInput1').value; // gets the inputed value
    // localStorage.setItem("items",item);

    if (localStorage.getItem('items') == null) {
        arr = [];
        arr.push(item);
        localStorage.setItem('items', JSON.stringify(arr));
    }
    else {
        arr_str = localStorage.getItem('items');
        arr = JSON.parse(arr_str);
        arr.push(item);
        localStorage.setItem('items', JSON.stringify(arr));
    }

    let t = document.getElementById('tabody');
    let str = '';
    arr.forEach((element, index) => {
        str += `
            <tr>
                <td>${index + 1}</td>
                <td>${element}</td>
                <td><button id = "del" onclick = "del(${index})">Delete</button></td>
            </tr>`;
    });
    t.innerHTML = str;
    document.getElementById('exampleFormControlInput1').value = null;
})

back.addEventListener('click', function () {
    window.open("to-dolist.html", "_self")
})

clear.addEventListener('click', function () {
    if (localStorage.getItem('items') != null) {
        if(confirm("Do you really want to clear your to-dos??")){
            localStorage.clear()
            document.getElementById('tabody').innerHTML = null;
        }
    }
    else{
        alert("Your list is already empty.\nWhat to clear?")
    }
    
})

show.addEventListener('click', function () {
    let str = ""
    if (localStorage.getItem('items') != null) {
        arr_str = localStorage.getItem('items');
        arr = JSON.parse(arr_str);
        arr.forEach((element, index) => {
            str += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${element}</td>
                    <td><button id="del" onclick = "del(${index})">Delete</button></td>
                </tr>`;
        });
    }
    if (localStorage.getItem('items') == null) {
        str += `
            <tr>
                <td>NA</td>
                <td>No items to do added.</td>
                <td>---------------------</td>
            </tr>`;
    }
    document.getElementById('tabody').innerHTML = str;
})
