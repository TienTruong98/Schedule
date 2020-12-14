function onLoad() {
    dateGenerate(4,31, 11,[8, 10]);
    getCurrentYear();
    displayDayOfWeek();
    displayDate();
}
function dateGenerate(startDayOfWeek, dayOfMonth, selectedDay, eventDayList){
    const days = document.getElementById('days');
    let linkElement;
    let listElement;
    for (let i = 0; i < startDayOfWeek; i +=1 ){
        linkElement = document.createElement('div');
        linkElement.removeAttribute("tabIndex");

        listElement = document.createElement('li');
        listElement.appendChild(linkElement);
        days.appendChild(listElement);
    }

    if (selectedDay === undefined){
        selectedDay = new Date().getDate();
    }
    for(let i = 1; i <= dayOfMonth; i += 1 ){
        var _addClass = '';
        if( i === selectedDay ){
            _addClass = "daySelected";
        }
        if (eventDayList.includes(i)){
            _addClass = 'dayEvent';
        }
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('title', i);
        linkElement.setAttribute('class', _addClass);
        linkElement.onclick = function(e){
            clickDate(e.target);
        }
        linkElement.innerHTML = i;

        let listElement = document.createElement('li');
        listElement.appendChild(linkElement);
        days.appendChild(listElement);
    }
}

function getCurrentYear(){
    const yearElement = document.getElementById('year');
    yearElement.innerHTML = new Date().getFullYear();
}

function displayDayOfWeek(dayOfWeek){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if (dayOfWeek === undefined){
        dayOfWeek = new Date().getDay();
    }

    const dayOfWeekElement = document.getElementById('dayOfWeek');
    dayOfWeekElement.innerHTML = days[dayOfWeek];
}


function displayDate(day, month) {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    if (day === undefined || month === undefined){
        day = new Date().getDate();
        month = new Date().getMonth();
    }
    const dateElement = document.getElementById('date');

    dateElement.innerHTML = months[month] + ' ' + day + nth();
}

const nth = function(day) {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function clickDate(e){
    const clickedDay = e.getAttribute('title');
    const currentElement = document.getElementsByClassName('daySelected')[0];


}
