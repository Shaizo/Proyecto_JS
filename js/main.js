$(document).ready(function() {

    //POST
    var posts = [{
            titulo: 'Articulo 1',
            fecha: 'Publicado ' + new Date(),
            contenido: 'Contenido Articulo 1',
        },
        {
            titulo: 'Articulo 2',
            fecha: new Date(),
            contenido: 'Contenido Articulo 2',
        },
        {
            titulo: 'Articulo 3',
            fecha: new Date(),
            contenido: 'Contenido Articulo 3',
        },
        {
            titulo: 'Articulo 4',
            fecha: new Date(),
            contenido: 'Contenido Articulo 4',
        },
    ];

    posts.forEach((item, index) => {
        var articulo =
            `<div class="col-sm-12">
                <nav class="navbar navbar-light no-padding my-2">
                    <div>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 jus">
                            <li class="nav-item">
                                <h2 class="bold-600">${item.titulo}</h2>
                                <footer class="blockquote-footer">${item.fecha}</footer>
                            </li>
                        </ul>
                    </div>
                    <h6 class="bk-verde text-white p-2 text-center mt-2">92 comentarios</h6>
                </nav>
                <p class="text-justify">${item.contenido}</p>
                <hr />
            </div>`;

        $('#contenedor-articulos').append(articulo);
    });



});

var tema_actual = "verde";

function cambiarTema(color) {
    if (color == tema_actual) {
    } else {
    	var bk_viejo = 'bk-' + tema_actual;
    	var btn_viejo = 'btn-' + tema_actual;

    	var bk_nuevo = 'bk-' + color;
    	var btn_nuevo = 'btn-' + color;

        $("." + bk_viejo).each(function(index, value){
        	$(this).removeClass(bk_viejo);
        	$(this).addClass(bk_nuevo);
        });
        $("." + btn_viejo).each(function(index, value){
        	$(this).removeClass(btn_viejo);
        	$(this).addClass(btn_nuevo);
        });
        tema_actual = color;
    }
}