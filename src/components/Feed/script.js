function cuenta (campo, limite) {
    res = "";

    if (campo.value.length > limite){
        campo.value = campo.value.substring(0, limite);
    }
    else{ 
        var x = document.getElementById("resultt");
        x.querySelector(".example").innerHTML = (limite - campo.value.length);
    }    
}
async function enviarPost () {
    post = document.getElementsByName("mensaje")[0].value;
    res = {post}

    const date = await fetch(`http://ec2-3-231-151-135.compute-1.amazonaws.com:4569/post`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(res)
    });
    traerDatos();
}