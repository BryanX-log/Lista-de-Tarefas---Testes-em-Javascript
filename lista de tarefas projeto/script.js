//caso clique no texto que vossa pessoa inserir ele será marcado com uma linha reta que cortará seu texto
//caso clique duas vezes, o elemento será excluido da lista
//o projeto está repleto de bugs, caso queira consertar boa sorte!!

let Search = document.getElementById('pesquisa');
let Button = document.getElementById('botao');
let List = document.getElementById('tarefas');
let marcado = false;
Button.addEventListener('click', function(){
    if (Search.value != '') {
        var tarefa = document.createElement('p');
        List.appendChild(tarefa);
        tarefa.innerText = '- '+ Search.value;
        Search.value = '';
        tarefa.addEventListener('click', function() {
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            }
            else{
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        tarefa.addEventListener('dblclick', function(){
            List.removeChild(tarefa);
        })
    
    
    }



})