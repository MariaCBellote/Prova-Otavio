function enviar(event){
    event.preventDefault();

    var nome = event.target[0].value;
    var matricula = event.target[1].value;
    var nota1 = parseFloat(event.target[2].value);
    var nota2=parseFloat(event.target[3].value);
    var media=((nota1+nota2)/2);
    var sit=[];
    
    console.log({nome,matricula,nota1,nota2});

    if(!matricula || !nome || !nota1 || !nota2){
        alert("Insira os valores obrigatórios!");
        return;
    }
    var tr = document.createElement("tr");
            var td_nome = document.createElement("td");
            td_nome.innerHTML = nome;
            var td_matricula = document.createElement("td");
            td_matricula.innerHTML = matricula;
            var td_nota1 = document.createElement("td");
            td_nota1.innerHTML = nota1;
            var td_nota2 = document.createElement("td");
            td_nota2.innerHTML = nota2;
            var td_media = document.createElement("td");
            td_media.innerHTML = media.toFixed(2);
            var td_sit = document.createElement("td");
            
           
            
            
            if(media >= 5){
                td_media.style.backgroundColor = "green";
                sit.push("Aprovado");
            }
            else {
                td_media.style.backgroundColor = "red";
              sit.push("Reprovado");}
           
            td_sit.innerHTML = sit.join(" ");
            console.log(sit);
            tr.appendChild(td_nome);
            tr.appendChild(td_matricula);
            tr.appendChild(td_nota1);
            tr.appendChild(td_nota2);
            tr.appendChild(td_media);
            tr.appendChild(td_sit);

            var tbody = document.getElementsByTagName('tbody')[0]; 
            tbody.appendChild(tr);
            var aluno = { nome,matricula,nota1,nota2,media,sit}

            
}