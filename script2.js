function inserir(num){
    document.querySelector('.tela').innerHTML += num ;
}

function clean(){
    document.querySelector(".tela").innerHTML = "";
}


function back(){
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = tela.substring(0, tela.length -1);

}

function somar() {
    let tela = document.querySelector(".tela").innerHTML;

    if (tela) {
        try {
            const resultado = eval(tela);

            if (!isNaN(resultado) && isFinite(resultado)) {
                document.querySelector(".tela").innerHTML = resultado;
            } else {
                document.querySelector(".tela").innerHTML = "Erro de cálculo";
            }
            
            if (tela.includes("/0")) {
                document.querySelector(".tela").innerHTML = "Divisão por zero";
            }else {
        
       
                document.querySelector(".tela").innerHTML = "Nenhum Comando";
                    }
        }catch(error) {
            document.querySelector(".tela").innerHTML = "Erro de expressão";
        }
    } 
        }

       

