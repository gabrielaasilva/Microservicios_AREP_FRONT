document.querySelector("#boton").addEventListener('click', traerDatos());

function traerDatos(){
    
    const jsonData = new XMLHttpRequest();

    jsonData.open('GET', 'http://localhost:4568/feed/20', true);
    jsonData.send();

    jsonData.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos)

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item)
                res.innerHTML += `
                    <div class="container">
                        <div class="content">
                            <h1>${item.fecha}</h1>
                            <h3>${item.contenido}</h3>
                        </div>
                        <div class="flap"></div>
                    </div>
                </div>
                `
            }
        }
    }
}