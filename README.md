![serve-it-up](https://i.postimg.cc/52cnRj7x/2019-05-26-15h15-23.png)
#### by Ily Trevino

## 1. Preámbulo

Para este proyecto se buscó crear una WebApp enfocada a tablets para un restaurante de comida. Para esta primera versión (0.1.0) se generó una pantalla principal enfocada al meserx, donde se muestra el menú (desayuno y comida) y una "libreta virtual" donde se despliega el pedido que se va generando al seleccionar los elementos del menú para la orden.

![start-screen](https://i.postimg.cc/JzZkXZbr/2019-05-26-17h19-58.png)

El meserx puede quitar elementos de la lista seleccionando el bote de basura, puede visualizar el total de la orden en la parte inferior del listado y puede enviar la orden con el nombre del cliente a la cocina, para que comience su preparación.

![order-screen](https://i.postimg.cc/TPxWJ19r/2019-05-26-17h20-23.png)

## 2. Resumen del proyecto

Esta vez tenemos un proyecto 100% por encargo. Si bien siempre puedes (y debes)
hacer sugerencias de mejoras y/o cambios, muchas veces trabajarás en proyectos
en los que primero hay que asegurarse de cumplir con lo requerido.

Un pequeño restaurante de hamburguesas, que está creciendo, necesita una
interfaz en la que puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente (a través de un
  _backend_ del que nos darán detalles más adelante).


Esta es la información que tenemos del cliente:

> Somos **Burger Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha sido muy bien recibido y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.


## 3. Objetivos de aprendizaje

1. El objetivo principal de este proyecto es aprender a construir una _interfaz web_ usando
   la _librería_ React. Este (y otros) frameworks de
   front-end atacan el mismo problema: **cómo mantener la interfaz y el estado
   sincronizados**. Así que esta experiencia espera familiarizarte con el
   concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
   ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un
   _producto_ a un _pedido_, la interfaz debe actualizar la lista del pedido y
   el total).

2. Finalmente, la interfaz debe estar diseñada específicamente para correr en
   **tablets**.
