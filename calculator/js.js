var szamsor = [];
var szamsor2 = [];

function szamadat(value){
    szamsor.push(value);
    console.log(szamsor + szamsor2)
    document.getElementById('asdf').innerHTML = szamsor;

}

function operator(value){
    szamsor.push(value);
    console.log(szamsor + szamsor2)
    document.getElementById('asdf').innerHTML = szamsor;

}

function szamolas(){
    let valami = szamsor2.join('') + szamsor.join('');
    let adat = eval(valami);
    szamsor = [];
    szamsor.push(adat);
    szamsor = [0];
    szamsor2.push(adat);
    
    document.getElementById('asdf').innerHTML = szamsor;
    document.getElementById('asdf2').innerHTML = szamsor2;
}

function clearall(){
    document.getElementById('asdf').innerHTML = 0;
    document.getElementById('asdf2').innerHTML = 0;
    szamsor = [];
    szamsor2 = [];
}