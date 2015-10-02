
/*var obj = [{
    "creditor": "Ivanov Ivan",
    "summ": 180,
    "curr": "UAH",
    "term": 45,
    "percent": 1.5,
    "return": 195,
}, {
    "creditor": "Ivon Pavlo",
    "summ": 180,
    "curr": "EUR",
    "term": 90,
    "percent": 3,
    "return": 300,
},{
    "creditor": "Test Victor",
    "summ": 160,
    "curr": "UAH",
    "term": 45,
    "percent": 1.5,
    "return": 180,
},{
    "creditor": "Markovich Alex",
    "summ": 110,
    "curr": "UAH",
    "term": 55,
    "percent": 1.5,
    "return": 120,
},{
    "creditor": "Stupka Petr",
    "summ": 180,
    "curr": "UAH",
    "term": 45,
    "percent": 1.5,
    "return": 195,
},{
    "creditor": "Nikitin Ivan",
    "summ": 1800,
    "curr": "USD",
    "term": 45,
    "percent": 1.5,
    "return": 1950,
},{
    "creditor": "Rodionova Alexandra",
    "summ": 180,
    "curr": "USD",
    "term": 45,
    "percent": 1.5,
    "return": 195,
},{
    "creditor": "Karpenko Dmitriy",
    "summ": 180,
    "curr": "UAH",
    "term": 45,
    "percent": 5,
    "return": 220,
},{
    "creditor": "Gupal Vitalina",
    "summ": 140,
    "curr": "EUR",
    "term": 45,
    "percent": 1.5,
    "return": 155,
},{
    "creditor": "Rodionov Mark",
    "summ": 180,
    "curr": "UAH",
    "term": 45,
    "percent": 1,
    "return": 195,
},{
    "creditor": "Karpenko Valeriy",
    "summ": 180,
    "curr": "EUR",
    "term": 45,
    "percent": 1.5,
    "return": 195,
},{
    "creditor": "Mazur Vlad",
    "summ": 140,
    "curr": "USD",
    "term": 45,
    "percent": 1.5,
    "return": 155,
}];
*/
window.onload = function(){
var globalCounter = 0;
var tbodyP = document.getElementById('tbody-prop');
var tbodyR = document.getElementById('tbody-req');
var selCreditorP = document.getElementById('sel-creditor-prop');
var selCurrP = document.getElementById('sel-curr-prop');
var selCreditorR = document.getElementById('sel-creditor-req');
var selCurrR = document.getElementById('sel-curr-req');

/*for (var i = 0; i < Object.keys(obj1).length; i++) {
    var tr = "<tr>";

    tr += "<td>"+"</td>"+"<td>" + obj1[i].creditor + "</td>" + "<td>" + obj1[i].summ + "</td>" + "<td>" + obj1[i].curr + "</td>" + "<td>" + obj1[i].term + "</td>" + "<td>" + obj1[i].ret  + "</td>" + "<td>" + obj1[i].percent + "</td></tr>";
    tbodyP.innerHTML += tr;
    tbodyR.innerHTML += tr;

    var optionCred = "";

    optionCred += "<option>" + obj[i].creditor + "</option>";
    selCreditorP.innerHTML +=optionCred;
    selCreditorR.innerHTML +=optionCred;

    var optionCurr = "";

    optionCurr += "<option>" + obj[i].curr + "</option>";
    selCurrP.innerHTML +=optionCurr;
    selCurrR.innerHTML +=optionCurr;



}
*/
}