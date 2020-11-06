var el = parseInt(document.getElementById("idespecial").innerHTML);
console.log(el);
var impresor = document.getElementById("Impresor");

var request = new ajaxRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200 || window.location.href.indexOf("http") == -1) {
            impresor.innerHTML = CreadorPagina();
            var images = document.getElementsByName("myImg");
            ListaImagenes(images);
        }
        else {
            alert("Ha ocurrido un error mientras se realizaba la petición");
        }
    }
}

function ListaImagenes(imagenes) {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", function () {
            ImagenModal(imagenes[i]);
        });
    }
}

function ImagenModal(Funcion) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = Funcion.src;
    captionText.innerHTML = Funcion.alt;
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
}

request.open("GET", "json/ElSalvador.json", true);
request.send(null);

function ajaxRequest() {
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
    if (window.ActiveXObject) {
        for (var i = 0; i < activexmodes.length; i++) {
            try {
                return new ActiveXObject(activexmodes[i]);
            }
            catch (e) {
                return false;
            }
        }
    }
    // Si se está usando Chrome, Mozilla, Safari, Opera, etc.
    else if (window.XMLHttpRequest) {
        console.log("Creando Peticion");
        return new XMLHttpRequest();
    }
    else {
        return false;
    }
}

function CreadorPagina() {
    var jsondata = JSON.parse(request.responseText);
    var Departamento = jsondata.departamentos[el];
    var texto = "<h1>" + Departamento.Nombre + "</h1>";
    texto += "<p class='border1'>";
    texto += Departamento.Descripcion;
    texto += "</p>"
    texto += "<h2>Historia</h2>"
    texto += "<p class='border1'>";
    texto += Departamento.Historia;
    texto += "</p>";
    texto += "<h2>Municipios</h2>";
    texto += "<div class='row'>";
    texto += "<div class='col-4'>";
    texto += "<div class='list-group'>";
    for (let i = 0; i < Departamento.Municipios.length; i++) {
        texto += "<a class='list-group-item active'>" + Departamento.Municipios[i].Nombre + "</a>"
    }
    texto += "</div>";
    texto += "</div>";
    texto += "<div class='col-8'>";
    texto += "<img class='img-fluid' src=\"" + Departamento.ImagenDepartamental + "\">";
    texto += "</div>";
    texto += "</div>";
    //CENTROS TURISTICOS
    texto += SitiosTuristicos(Departamento.CentrosTuristicos);
    texto += "</div>";
    //
    return texto;
}

function SitiosTuristicos(Sitios) {
    var texto = "";
    if (Sitios.length == 0) {
        texto = "";
    } else if (Sitios.length == 1) {
        texto += "<h2>Centros Turisticos</h2>";
        //
        texto += "<div id='Carrusel' class='carousel slide' data-ride='carousel'>";
        texto += "<div class='carousel-inner'>";
        //
        texto += "<div class='carousel-item active'>";
        texto += "<img class='d-block w-100' name='myImg' src=\"" + Sitios[0].Imagen + "\" alt=\"" + Sitios[0].Nombre + "\">";
        texto += "<div class='carousel-caption d-none d-md-block'>"
        texto += "<h5>" + Sitios[0].Nombre + "</h5>"
        texto += "</div>";
        texto += "</div>";
        texto += "</div>";
        //
        texto += "</div>";
        //
        texto += "<div id='myModal' class='modal'>";
        texto += "<span class='close'>&times;</span>";
        texto += "<img class='modal-content' id='img01'>";
        texto += "<div id='caption'></div>"
        texto += "</div>";
    }
    else {
        texto += "<h2>Centros Turisticos</h2>";
        //
        texto += "<div id='Carrusel' class='carousel slide' data-ride='carousel'>";
        texto += "<ol class='carousel-indicators'>";
        texto += "<li data-target='#Carrusel' data-slide-to='0' class='active'></li>"
        for (let i = 1; i < Sitios.length; i++) {
            texto += "<li data-target='#Carrusel' data-slide-to=\"" + i + "\" class='active'></li>"
        }
        texto += "</ol>";
        texto += "<div class='carousel-inner'>";
        //
        texto += "<div class='carousel-item active'>";
        texto += "<img class='d-block w-100' name='myImg' src=\"" + Sitios[0].Imagen + "\" alt=\"" + Sitios[0].Nombre + "\">";
        texto += "<div class='carousel-caption d-none d-md-block'>"
        texto += "<h5>" + Sitios[0].Nombre + "</h5>"
        texto += "</div>";
        texto += "</div>";
        //
        for (let i = 1; i < Sitios.length; i++) {
            texto += "<div class='carousel-item'>";
            texto += "<img class='d-block w-100' name='myImg' src=\"" + Sitios[i].Imagen + "\" alt=\"" + Sitios[i].Nombre + "\">";
            texto += "<div class='carousel-caption d-none d-md-block'>"
            texto += "<h5>" + Sitios[i].Nombre + "</h5>"
            texto += "</div>";
            texto += "</div>";
        }
        //
        texto += "</div>";
        //
        texto += "<a class='carousel-control-prev' href='#Carrusel' role='button' data-slide='prev'>";
        texto += "<span class='carousel-control-prev-icon' aria-hidden='true'></span>";
        texto += "<span class='sr-only'>Previous</span>";
        texto += "</a>";
        //
        texto += "<a class='carousel-control-next' href='#Carrusel' role='button' data-slide='next'>";
        texto += "<span class='carousel-control-next-icon' aria-hidden='true'></span>";
        texto += "<span class='sr-only'>Next</span>";
        texto += "</a>";
        //
        texto += "</div>";
        //
        texto += "<div id='myModal' class='modal'>";
        texto += "<span class='close'>&times;</span>";
        texto += "<img class='modal-content' id='img01'>";
        texto += "<div id='caption'></div>"
        texto += "</div>";
    }
    return texto;
}