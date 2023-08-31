function inserir(num){
    document.getElementById('#tela').innerHTML += num ;
}

function clean(){
    document.getElementById("#tela").innerHTML = "";
}


function back(){
    let tela = document.getElementById("#tela").innerHTML;
    document.getElementById("#tela").innerHTML = tela.substring(0, tela.length -1);

}

function somar(){
    let tela = document.getElementById("#tela").innerHTML;
    
    if (tela) {
        document.getElementById('#tela').innerHTML = eval(tela);
        
    }else{
        document.getElementById("#tela").innerHTML = "Nenhum Comando" 
    }



}