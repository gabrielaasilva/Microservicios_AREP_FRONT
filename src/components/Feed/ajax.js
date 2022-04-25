//document.querySelector("#boton").addEventListener('click', traerDatos());

window.onload = traerDatos;

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
                <div">
                    <div class="second py-2 px-2"> <span class="text1">${item.contenido}</span>
                        <div class="d-flex justify-content-between py-1 pt-2">
                            <div>
                                <span class="text3">${item.fecha}</span><span class="thumbup"><i class="fa fa-thumbs-o-up">
                            </div>
                        </div>
                    </div>
                `
            }
        }
    }
}
