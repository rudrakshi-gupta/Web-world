let sv;
india = setInterval(i = () => {
    date = new Date();
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    // op = { timeZoneName: 'short', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
    // tz = date.toLocaleDateString(undefined, op).slice(-3)
    if (date.getHours() in array){
        if (date.getMinutes() in array ) {
            if (date.getSeconds() in array) {
                time = '0'+date.getHours() + ':0' + date.getMinutes() + ':0' + date.getSeconds()
            } else {
                time = '0'+date.getHours() + ':0' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
        else {
            if (date.getSeconds() in array) {
                time = '0'+date.getHours() + ':' + date.getMinutes() + ':0' + date.getSeconds()
            } else {
                time = '0'+date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
    }
    else{
        if (date.getMinutes() in array ) {
            if (date.getSeconds() in array) {
                time = date.getHours() + ':0' + date.getMinutes() + ':0' + date.getSeconds()
            } else {
                time = date.getHours() + ':0' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
        else {
            if (date.getSeconds() in array) {
                time = date.getHours() + ':' + date.getMinutes() + ':0' + date.getSeconds()
            } else {
                time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
            }
        }
    }
    
    document.getElementById('time').innerText = time;
    document.getElementById('p0').innerText = 'IST';
    document.getElementById("p1").innerText = date.toLocaleDateString(undefined, options);

}, 1000);
sv = india;

document.getElementById('USA').onclick = function() {
    America = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'America/New_York';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = date.toLocaleString('en-US', opt).slice(-3);
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = America;
}
document.getElementById('Britain').onclick = function() {
    Britain = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'Europe/London';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'BST';
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = Britain;
}
document.getElementById('Japan').onclick = function() {
    Tokyo = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'Asia/Tokyo';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'JST'
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = Tokyo;
}
document.getElementById('India').onclick = function() {
    india = setInterval(i, 1000);
    clearInterval(sv);
    sv = india;
}
document.getElementById('Egypt').onclick = function() {
    Egypt = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'Africa/Cairo';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'EGY';
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = Egypt;
}
document.getElementById('Australia').onclick = function() {
    Australia = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'Australia/Sydney';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'AEST';
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = Australia;
}
document.getElementById('Argentina').onclick = function() {
    Argentina = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'America/Argentina/Buenos_Aires';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'ARG';
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv = Argentina;
}
document.getElementById('UTC').onclick = function() {
    UTC = setInterval(() => {
        date = new Date();
        opt = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric', seconds: 'numerix' };
        opt.timeZone = 'UTC';
        opt.timeZoneName = 'short';
            
        document.getElementById('time').innerText = date.toLocaleTimeString('en-GB', opt).slice(23,31);
        document.getElementById('p0').innerText = 'UTC';
        document.getElementById("p1").innerText = date.toLocaleString('en-US', opt).slice(0,20);
            
    }, 1000);
    clearInterval(sv);
    sv =UTC;
}