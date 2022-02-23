const pessoas = [];
var isnotfull = true;
var users = new Number;
var iscomple_clicked = new Boolean;

function show_users(){
    document.getElementById("users_number").innerHTML = users;
}

function to_comple(){
    document.getElementById("btn_comple").style.display = "none";
    document.getElementById("complemento").style.display = "flex";  
    document.getElementById("complement").setAttribute("required", "required"); 
    iscomple_clicked = true;
}

function create_person(){

    const nome = document.getElementById("name").value;
    const email = document.getElementById("e-mail").value;
    const DDD = document.getElementById("DDD").value;
    const cell_number = document.getElementById("cell_number").value;
    const cep = document.getElementById("cep").value;
    const street_name = document.getElementById("street_name").value;
    const address_num = document.getElementById("address_num").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const complement = document.getElementById("complement").value;
    
    let alerta = "";


    if (nome == "" || !/\S/.test(nome)){
        alerta += "Preencha seu nome\r\n" 
        isnotfull = true;
    }
    
    if (email == "" || !/\S/.test(email)){
        alerta += "Preencha seu e-mail\r\n"
        isnotfull = true;
    }
    if (DDD == "" || !/\S/.test(DDD)){
        alerta += "Preencha seu DDD\r\n"
        isnotfull = true;
    }
    if(cep == "" || !/\S/.test(cep)){
        alerta += "Preencha seu CEP\r\n"
        isnotfull = true;

    }
    if (cell_number == "" || !/\S/.test(cell_number)){
        alerta += "Preencha o número do celular\r\n"
        isnotfull = true;

    }

    if (street_name == "" || !/\S/.test(street_name)){
        alerta += "Preencha o nome da rua\r\n"
        isnotfull = true;

    }
    if (address_num == "" || !/\S/.test(address_num)){
        alerta += "Preencha o número da residência\r\n"
        isnotfull = true;

    }

    if(iscomple_clicked == true)
        if (complement == "" || !/\S/.test(complement)){
        alerta += "Preencha o complemento\r\n"
        isnotfull = true;
    }

    if (bairro == "" || !/\S/.test(bairro)){
        alerta += "Preencha o nome do seu bairro\r\n"
        isnotfull = true;

    }
    if (cidade == "" || !/\S/.test(cidade)){
        alerta += "Preencha o nome da sua cidade\r\n"
        isnotfull = true;

    }
    if (estado == "" || !/\S/.test(estado)){
        alerta += "Preencha o nome do seu Estado"
        isnotfull = true;

    }

    if (alerta == ""){
        users ++;
        show_users(); 

        console.log(users)

        isnotfull = false;
        const pessoa = {
            nome,
            email,
            DDD,
            cell_number,
            cep,
            street_name,
            address_num,
            complement,
            bairro,
            cidade,
            estado,
            data: new Date().toLocaleDateString()
        }
        console.log("Criando cadastro...")
        pessoas.push(pessoa);
        render();

        alert("Tudo certo, pessoa cadastrada com sucesso!")
        return users;

    }else{
        alert(alerta)
        console.log(alert)
    }

}

function render(){
    if (isnotfull == false){

        const tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        for(let pessoa of pessoas){
            const person = `        
                <tr>
                    <td>Nome: ${pessoa.nome}</td>
                    <td>E-mail: ${pessoa.email}</</td>
                    <td>DDD: ${pessoa.DDD}</td>
                    <td>Celular: ${pessoa.cell_number}</td>
                    <td>CEP: ${pessoa.cep}</td>
                    <td>Rua: ${pessoa.street_name}</td>
                    <td>Número: ${pessoa.address_num}</td>
                    <td>Complemento: ${pessoa.complement}</td>
                    <td>Bairro: ${pessoa.bairro}</td>
                    <td>Cidade: ${pessoa.cidade}</td>
                    <td>Estado: ${pessoa.estado}</td>
                    <td>Data de cadastro: ${pessoa.data}</td>
                </tr>
            `;
            console.log(pessoa);
            tbody.innerHTML += person;    
            document.getElementById("forms").reset();
        }
    }
}


function to_cadastro(){
    document.getElementById("cadastro").style.display = "flex";
    document.getElementById("pessoas_cadastradas").style.display = "none";
}

function to_pessoas_cadastradas(){
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("pessoas_cadastradas").style.display = "flex";
}

show_users(); 


function clean_name(){
    document.getElementById("name").value = "";
}



function clean_email(){
    document.getElementById("e-mail").value = "";
}



function clean_phone(){
    document.getElementById("DDD").value = "";
    document.getElementById("cell_number").value = "";

}



function clean_address1(){
    document.getElementById("cep").value = "";
    document.getElementById("street_name").value = "";
    document.getElementById("address_num").value = "";

    if (document.getElementById("complemento").style !== "none"){
        document.getElementById("complement").value = "";
    }
}



function clean_address2(){
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";

}