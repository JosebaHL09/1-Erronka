

    window.onload = function () {
        
  
     
        // Variables
        const baseDeDatos = [
            {
                id: 1,
                Izena: 'Bocadillo',
                Prezioa: 5,
                Mota: 'Bocadillo',
                Deskontua: 0,
                Portzentaia: 0,
                img_path: 'https://www.gourmetkebab.es/wp-content/uploads/2020/04/durum-kebab.jpg',
            },
            {
                id: 2,
                Izena: 'Sopa do macaco',
                Prezioa: 10,
                Mota: 'Sopa',
                Deskontua: 1,
                Portzentaia: 10,
                img_path: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2016/01/sopa-del-cocido-960x540.jpg',
            },
            {
                id: 3,
                Izena: 'Patatas',
                Prezioa: 3,
                Mota: 'a',
                Deskontua: 1,
                Portzentaia: 50,
                img_path: 'https://s1.eestatic.com/2015/03/10/cocinillas/cocinillas_17008413_127305534_854x640.jpg',
            }

        ];

        let carrito = [];
        let total = 0;
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');
        // var newArray = info.filter(Mota == "a" );
        // Funciones
     

        /**
        * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
        */
        function renderizarProductos() {
           //const result = baseDeDatos.filter(word => word.Mota ="a");
            
           baseDeDatos.forEach((info) => {
                // Estructura
                const miNodo = document.createElement('div');
                miNodo.classList.add('card', 'col-sm-4');
                // Body
                const miNodoCardBody = document.createElement('div');
                miNodoCardBody.classList.add('card-body');
                // Titulo
                const miNodoTitle = document.createElement('h5');
                miNodoTitle.classList.add('card-title');
                miNodoTitle.textContent = info.Izena;
                // Imagen
                const miNodoImagen = document.createElement('img');
                miNodoImagen.classList.add('img-fluid');
                miNodoImagen.setAttribute('src', info.img_path);
                // Precio
                const miNodoPrecio = document.createElement('p');
                miNodoPrecio.classList.add('card-text');
                if(info.Deskontua==1){
                miNodoPrecio.textContent = info.Prezioa-(info.Prezioa*info.Portzentaia/100) + '€';
                }else{
                    miNodoPrecio.textContent = info.Prezioa+ '€';
                }


                const miNodoPrecio1 = document.createElement('p');
                miNodoPrecio1.classList.add('card-text','s');
                var str =parseInt(info.Prezioa)+ '€'
                miNodoPrecio1.textContent = str+ '   -'+ info.Prezioa+'%';
                // Boton 
                const miNodoBoton = document.createElement('button');
                miNodoBoton.classList.add('btn', 'btn-primary');
                miNodoBoton.textContent = '+';
                miNodoBoton.setAttribute('marcador', info.id);
                miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                // Insertamos
                miNodoCardBody.appendChild(miNodoImagen);
                miNodoCardBody.appendChild(miNodoTitle);
                miNodoCardBody.appendChild(miNodoPrecio);
                miNodoCardBody.appendChild(miNodoPrecio1);
                miNodoCardBody.appendChild(miNodoBoton);
                miNodo.appendChild(miNodoCardBody);
                DOMitems.appendChild(miNodo);
            });
            
        }
        function renderizarProductos2() {
            const result = baseDeDatos.filter(word => word.Deskontua=1);
             
            var para = document.createElement("h3");
            para.innerText = "descontuarekin";
            document.body.appendChild(para);
            result.forEach((info) => {
                 // Estructura
                 const miNodo = document.createElement('div');
                 miNodo.classList.add('card', 'col-sm-4');
                 // Body
                 const miNodoCardBody = document.createElement('div');
                 miNodoCardBody.classList.add('card-body');
                 // Titulo
                 const miNodoTitle = document.createElement('h5');
                 miNodoTitle.classList.add('card-title');
                 miNodoTitle.textContent = info.Izena;
                 // Imagen
                 const miNodoImagen = document.createElement('img');
                 miNodoImagen.classList.add('img-fluid');
                 miNodoImagen.setAttribute('src', info.img_path);
                 // Precio
                 const miNodoPrecio = document.createElement('p');
                 miNodoPrecio.classList.add('card-text');
                 if(info.Deskontua==1){
                 miNodoPrecio.textContent = info.Prezioa-(info.Prezioa*info.Portzentaia/100) + '€';
                 }else{
                     miNodoPrecio.textContent = info.Prezioa+ '€';
                 }
 
 
                 const miNodoPrecio1 = document.createElement('p');
                 miNodoPrecio1.classList.add('card-text','s');
                 var str =parseInt(info.Prezioa)+ '€'
                 miNodoPrecio1.textContent = str+ '   -'+ info.Prezioa+'%';
                 // Boton 
                 const miNodoBoton = document.createElement('button');
                 miNodoBoton.classList.add('btn', 'btn-primary');
                 miNodoBoton.textContent = '+';
                 miNodoBoton.setAttribute('marcador', info.id);
                 miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
                 // Insertamos
                 
                 miNodoCardBody.appendChild(miNodoImagen);
                 miNodoCardBody.appendChild(miNodoTitle);
                 miNodoCardBody.appendChild(miNodoPrecio);
                 miNodoCardBody.appendChild(miNodoPrecio1);
                 miNodoCardBody.appendChild(miNodoBoton);
                 miNodo.appendChild(miNodoCardBody);
                 DOMitems.appendChild(miNodo);
             });
             
         }
        /**
        * Evento para añadir un producto al carrito de la compra
        */
        function anyadirProductoAlCarrito(evento) {
            // Anyadimos el Nodo a nuestro carrito
            carrito.push(evento.target.getAttribute('marcador'))
            // Calculo el total
            calcularTotal();
            // Actualizamos el carrito 
            renderizarCarrito();

        }

        /**
        * Dibuja todos los productos guardados en el carrito
        */
        function renderizarCarrito() {
            // Vaciamos todo el html
            DOMcarrito.textContent = '';
            // Quitamos los duplicados
            const carritoSinDuplicados = [...new Set(carrito)];
            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach((item) => {
                // Obtenemos el item que necesitamos de la variable base de datos
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    // ¿Coincide las id? Solo puede existir un caso
                    return itemBaseDatos.id === parseInt(item);
                });
                // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    ///////////////////////
                    return itemId === item ? total += 1 : total;
                }, 0);
                // Creamos el nodo del item del carrito
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                prezioF=miItem[0].Prezioa-(miItem[0].Prezioa * miItem[0].Portzentaia /100);
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].Izena} - ${prezioF}€`;
                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                // Mezclamos nodos
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
            });
            
        }

        /**
        * Evento para borrar un elemento del carrito
        */
        function borrarItemCarrito(evento) {
            // Obtenemos el producto ID que hay en el boton pulsado
            const id = evento.target.dataset.item;
            // Borramos todos los productos
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            // volvemos a renderizar
            renderizarCarrito();
            // Calculamos de nuevo el precio
            calcularTotal();
        }

        /**
        * Calcula el precio total teniendo en cuenta los productos repetidos
        */
        function calcularTotal() {
            // Limpiamos precio anterior
            total = 0;
            // Recorremos el array del carrito
            carrito.forEach((item) => {
                // De cada elemento obtenemos su precio
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                total = total + (miItem[0].Prezioa-(miItem[0].Prezioa * miItem[0].Portzentaia /100));
            });
            // Renderizamos el precio en el HTML
            DOMtotal.textContent = total.toFixed(2);
        }

        /**
        * Varia el carrito y vuelve a dibujarlo
        */
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            carrito = [];
            // Renderizamos los cambios
            renderizarCarrito();
            calcularTotal();
        }

        // Eventos
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);

        // Inicio
        renderizarProductos();
        //renderizarProductos2();

    }
