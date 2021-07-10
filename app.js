const contenedorUser=document.getElementById('contenedorUser');

let listUser=[];


document.addEventListener('DOMContentLoaded', getInfo);

contenedorUser.addEventListener('click',elegirUsuario);



async function getInfo(){
    const users= await fetch('http://localhost:3000/users');

    const usuarios = await users.json();
    listarUsuarios(usuarios)
    
       
}

function listarUsuarios(usu){ 
   
    usu.forEach((el)=>{  
        const row=document.createElement('tr'); 
        row.innerHTML += `
    
            <th scope="row" class='item'>${el.id}</th>
            
            <td>${el.name}</td>
            <td>${el.username}</td>
            <td>${el.email}</td>
            
            <td>${el.phone}</td>
            <td>${el.website}</td>
            <td><button>Detallar</button></td>
            <td><button class="eliminarItem">Eliminar</button></td>
  
    `
    contenedorUser.appendChild(row);
    listUser=[...listUser,el];
    
    });
    
}

function elegirUsuario(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('item')){          
       
    
    }

}

function eliminarUsuario(item){
    const i=item.firstElementChild.classList.contains('user');
    
}
        





