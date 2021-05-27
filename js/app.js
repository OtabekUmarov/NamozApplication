/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    
}

var hday     = document.getElementById('day')
var hdate    = document.getElementById('date')
var hmonth   = document.getElementById('month')
var hyear    = document.getElementById('year')
var menu     = document.getElementById('menu')
var modal    = document.getElementById('modal')
var links    = document.querySelectorAll('footer a')

function check(num) {
    return (num < 10) ? '0' + num : num
}

var d = new Date();

hdate.innerHTML = check(d.getDate())
hyear.innerHTML = d.getFullYear()

function myFunction() {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    hday.innerHTML = n;
}

function myFunction2(oy) {
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "Jule";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[d.getMonth()];
    hmonth.innerHTML = n;
}

menu.addEventListener('click',()=> {
    modal.classList.toggle('active')
    menu.classList.toggle('active')
})

links.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('footer a.active').classList.remove('active')
        item.classList.add('active')
    })
})

myFunction()
myFunction2()


var buttons = document.querySelectorAll('footer button')
var items = document.querySelectorAll('.mobile .item')
buttons.forEach(i => {
    i.addEventListener('click',(e)=>{
        document.querySelector('footer button.active').classList.remove('active')
        i.classList.add('active')
        e.preventDefault()
        var link = i.getAttribute('data-link') // logo

        items.forEach(item => {
            if (item.classList.contains(link)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
            
        })
        
    })
})

var qazolar = document.getElementById('qazolar')
var plus = document.querySelectorAll('.plus')
var soni = document.querySelectorAll('.soni')
var minus = document.querySelectorAll('.minus')
var start = document.getElementById('start')
var sanasi = document.getElementById('sanasi')
var menu = document.getElementById('menu')
var modal = document.getElementById('modal')
var bkun = document.getElementById('bkun')
var boy = document.getElementById('boy')
var byil = document.getElementById('byil')

var qazolarSoni = {
    bomdod: 0,
    peshin: 0,
    asr: 0,
    shom: 0,
    hufton: 0
}

var qazoSana = []
if (localStorage.getItem('qazoSana')) {
    start.style.display = 'none'
    sanasi.style.opacity = 1
    qazolar.style.opacity = 1
    try {
        qazoSana = JSON.parse(localStorage.getItem('qazoSana'))
    } catch (error) {
        localStorage.removeItem('qazoSana')
        localStorage.removeItem('qazoSana')
    }
}

if (localStorage.getItem('qazolarCount')) {
    try {
        qazolarSoni = JSON.parse(localStorage.getItem('qazolarCount'))
    } catch (error) {
        localStorage.removeItem('qazolarCount')
    }
}


function check(num) {
    return (num < 10) ? '0' + num : num
}

function counter() {
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function () {
            soni[i].innerHTML++
            var attr = soni[i].getAttribute('data-payt')
            if (attr == 'bomdod') {
                qazolarSoni.bomdod++
                saveLocal()
            } else if (attr == 'peshin') {
                qazolarSoni.peshin++
                saveLocal()
            } else if (attr == 'asr') {
                qazolarSoni.asr++
                saveLocal()
            } else if (attr == 'shom') {
                qazolarSoni.shom++
                saveLocal()
            } else if (attr == 'hufton') {
                qazolarSoni.hufton++
                saveLocal()
            }
        })
        minus[i].addEventListener('click', function () {
            if (soni[i].innerHTML == 0)
                return false
            soni[i].innerHTML--
            var attr = soni[i].getAttribute('data-payt')
            if (attr == 'bomdod') {
                qazolarSoni.bomdod--
                saveLocal()
            } else if (attr == 'peshin') {
                qazolarSoni.peshin--
                saveLocal()
            } else if (attr == 'asr') {
                qazolarSoni.asr--
                saveLocal()
            } else if (attr == 'shom') {
                qazolarSoni.shom--
                saveLocal()
            } else if (attr == 'hufton') {
                qazolarSoni.hufton--
                saveLocal()
            }
        })

    }
}
soni[0].textContent = qazolarSoni.bomdod
soni[1].textContent = qazolarSoni.peshin
soni[2].textContent = qazolarSoni.asr
soni[3].textContent = qazolarSoni.shom
soni[4].textContent = qazolarSoni.hufton

var d = new Date();

function saveLoc() {
    var sana = check(d.getDate())
    var oy = check(d.getMonth() + 1)
    var yil = d.getFullYear()
    qazoSana.push(sana)
    qazoSana.push(oy)
    qazoSana.push(yil)
    localStorage.setItem('qazoSana', JSON.stringify(qazoSana))
}

function saveLocal() {
    localStorage.setItem('qazolarCount', JSON.stringify(qazolarSoni))
}

bkun.innerHTML = qazoSana[0]
boy.innerHTML = qazoSana[1]
byil.innerHTML = qazoSana[2]

start.addEventListener('click', ()=>{
    bkun.innerHTML = check(d.getDate())
    boy.innerHTML = check(d.getMonth() + 1)
    byil.innerHTML = d.getFullYear()
    saveLoc()
    start.style.display = 'none'
    sanasi.style.opacity = 1
    qazolar.style.opacity = 1
})

function showMenu() {
    modal.classList.toggle('active')
    menu.classList.toggle('active')
}
counter()

var rest = document.getElementById('rest')
rest.addEventListener('click', ()=>{
    localStorage.removeItem('qazoSana')
    localStorage.removeItem('qazolarCount')
    start.style.display = 'block'
    sanasi.style.opacity = 0
    qazolar.style.opacity = 0
    soni[0].textContent = 0
    soni[1].textContent = 0
    soni[2].textContent = 0
    soni[3].textContent = 0
    soni[4].textContent = 0
})

var counter = document.getElementById('counter')
var allCount = document.getElementById('allCount')
var zikr = document.getElementById('zikr')
var options = document.querySelectorAll('option')
var imgClick = document.querySelector('.zikrClick img')
var tasbeh = document.querySelector('.tasbeh')
var audios = document.getElementById('audio')
var menu = document.getElementById('menu')
var modal = document.getElementById('modal')
var clearBtn = document.querySelector('.claer')
var zvukBtn = document.querySelector('.zvuk')
var optionsL = options.length

var i = 0
var countt = 0
var zikrClick = document.getElementById('zikrClick')
zikrClick.addEventListener('click', () =>{
    zvukTek()
    countt++
    var rot = countt * 11
    imgClick.style.transform = 'rotate(' + rot + 'deg)'
    tasbeh.style.transform = 'rotate(' + rot + 'deg)'
    if (countt % 34 == 0) {
        allCount.innerHTML++
        imgClick.style.transform = 'rotate(0deg)'
        countt = 0
        tasbeh.style.transform = 'rotate(0deg)'
        navigator.vibrate(500)
        i++
    }
    if (i % optionsL == 0) {
        i = 0
        options[i].setAttribute('selected', '')
        options[i + 1].removeAttribute('selected')
    } else {
        options[i].setAttribute('selected', '')
        options[i - 1].removeAttribute('selected')
    }
    counter.innerHTML = countt
    zvukTek()

})

function showMenu() {
    modal.classList.toggle('active')
    menu.classList.toggle('active')
}
var clear = document.getElementById('clear')
clear.addEventListener('click', ()=> {
    counter.innerHTML = 0
    allCount.innerHTML = 0
    options[0].setAttribute('selected', '')
    countt = 0
    imgClick.style.transform = 'rotate(0deg)'
    tasbeh.style.transform = 'rotate(0deg)'
    var clearSvg = document.querySelector('.clear svg')
    clearSvg.style.transform = 'rotate(360deg)'
})

var zvukMute = document.getElementById('zvuk')

zvukMute.addEventListener('click', ()=>{
    zvukBtn.classList.toggle('active')
    navigator.vibrate(0)
    audios.setAttribute('muted', '')
})

function zvukTek() {
    if (zvukBtn.classList.contains('active')) {
        audios.setAttribute('muted', '')
    } else {
        audios.removeAttribute('muted')
        audios.play()
    }
}