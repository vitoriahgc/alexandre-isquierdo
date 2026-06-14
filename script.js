```javascript
const upload = document.getElementById("upload");
const foto = document.getElementById("foto");
const download = document.getElementById("download");
const arte = document.getElementById("arte");

// Escolher foto
upload.onchange = function(){

    const arquivo = this.files[0];

    if(!arquivo) return;

    foto.src = URL.createObjectURL(arquivo);

};

// Baixar imagem
download.onclick = function(){

    html2canvas(arte,{

        scale:2,

        useCORS:true

    }).then(function(canvas){

        const a = document.createElement("a");

        a.href = canvas.toDataURL("image/png");

        a.download = "alexandre-isquierdo.png";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

    });

};
```
