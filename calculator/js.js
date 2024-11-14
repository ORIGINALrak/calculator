var szamsor = [];
var szamsor2 = [];


function szamadat(value){
    szamsor.push(value);
    console.log(szamsor)
    document.getElementById('asdf').innerHTML = szamsor;

}

function operator(value){
    if(szamsor[szamsor.length-1] != "/" && szamsor[szamsor.length-1] != "-" && szamsor[szamsor.length-1] != "+" && szamsor[szamsor.length-1] != "*" && szamsor[szamsor.length-1] != ".")
        {
            szamsor.push(value);
            console.log(szamsor)
            document.getElementById('asdf').innerHTML = szamsor;
        }
}

function szamolas(){
    let valami =  szamsor.join('');
    let adat = eval(valami);
    szamsor = [];
    szamsor.push(adat);
    szamsor2 = [];
    szamsor2.push(adat);
    
    document.getElementById('asdf').innerHTML = szamsor;
    document.getElementById('asdf2').innerHTML = szamsor2;
    console.log(szamsor2)
}

function clearall(){
    document.getElementById('asdf').innerHTML = 0;
    document.getElementById('asdf2').innerHTML = 0;
    szamsor = [];
    szamsor2 = [];
}

function pluszminusz(){
    let minuszvalami =  szamsor.join('');
    let minuszadat = eval(minuszvalami);
    let asd123 = minuszadat *-1;
    szamsor = [];
    szamsor.push(asd123);
    szamsor2 = [];
    szamsor2.push(asd123);

    document.getElementById('asdf').innerHTML = szamsor;
    document.getElementById('asdf2').innerHTML = szamsor2;
    console.log(szamsor2)
}

function masodikon(){
    let masodikonvalami =  szamsor.join('');
    let masodikonadat = eval(masodikonvalami);
    let asd123 = masodikonadat * masodikonadat;
    szamsor = [];
    szamsor.push(asd123);
    szamsor2 = [];
    szamsor2.push(asd123);

    document.getElementById('asdf').innerHTML = szamsor;
    document.getElementById('asdf2').innerHTML = szamsor2;
    console.log(szamsor2)
}