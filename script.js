let tarefa = "";
let etiqueta = "";
let contador = 0;

function adicionarTarefa() {
    tarefa = document.getElementById("inputTarefa").value.trim();
    if (/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(tarefa)) {
    document.getElementById("inputTarefa").value = ""
    criarLista()
    } else {
    alert("A tarefa só pode conter letras.");
    document.getElementById("inputTarefa").value = "";
    }
}

function adicionarEtiqueta() {
    etiqueta = document.getElementById("inputEtiqueta").value.trim();
    if (/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(etiqueta)) {
    document.getElementById("inputEtiqueta").value = ""
    criarLista()
    } else {
    alert("A etiqueta só pode conter letras.");
    document.getElementById("inputEtiqueta").value = "";
    }
}

function criarLista() {
    if (tarefa !=="" && etiqueta!=="") {
    let data = new Date();
    let dataBr = data.toLocaleString('pt-BR', { dateStyle: 'short'});

    let li = document.createElement('li')
    li.innerHTML = `
    <section class="tasks-cards">
      <div class="task-texts">
        <div class="task-nome"></div>
        <div class="subtextos">
          <div class="task-etiqueta"></div>
          <div class="date"></div>
        </div>
      </div>
      <button class="botao-concluir" onclick="botaoConcluir(this)" type="button" aria-label="Concluir tarefa">Concluir</button>
    </section>
  `
  let taskNome = li.querySelector('.task-nome')
  taskNome.textContent = tarefa

  let taskEtiqueta = li.querySelector('.task-etiqueta')
  taskEtiqueta.textContent = etiqueta

  let date = li.querySelector('.date')
  date.textContent = `Criado em: ${dataBr}`
  
  document.querySelector("ul").appendChild(li)
  tarefa = "";
  etiqueta = "";

    }

}

function botaoConcluir(button){
   taskCard = button.closest('.tasks-cards');
   taskNome = taskCard.querySelector('.task-nome');
   taskNome.style.textDecoration = 'line-through';
  
   let checkImg = document.createElement('img');
   checkImg.src = "./img/check.svg";
   checkImg.style.width = '50px';
   checkImg.style.height = '50px';
   checkImg.style.border = 'none';
   checkImg.style.background = 'none';
  
   button.replaceWith(checkImg);

   contador++;
   document.getElementById("contador").textContent = contador;

}



  
