# Proyecto 6: API REST

¡Bienvenida/o 😊!

Este proyecto cuenta con un servidor Express, una base de datos con Mongoose y mucho cariño.
¡Se trata de una base de datos relacionada **bidireccionalmente**!

Tenemos un registro de **razas de caballos** en la que cada una se reflejan estos datos:

```
    {
		"_id": "id_de_la_raza",
		"name": "nombre_Habitual",
		"origin": "Lugar_origen_raza",
		"av_height": 140, //* media de altura en centímentros
		"coats": [
			"Capas_más_habituales" //* colores de pelo
		],
		"img": "URL_imagen_ejemplo",
		"bestDiscipline": { // * dato relacionado
			"_id": "id_de_la_disciplina",
			"name": "Nombre_de_la_disciplina",
			"description": "Descripción_sintetizada_de_la_disciplina",
			"olympic": "yes/no", //* informa si la disciplina es o no olímpica
			"bestBreeds": [ //*dato relacionado
				"Mejores_razas_para_esta_disciplina"
			],
			"__v": 0
		}
```

Por otro lado, un registro de **disciplinas ecuestres** con los siguientes datos:

```
{
		"_id": "id_de_la_disciplina",
		"name": "nombre_habitual",
		"description": "Descripción_sintetizada",
		"olympic": "yes/no", //* Muestra si es o no una disciplina olímpica
		"bestBreeds": [ //* dato relacionado. Muestra las mejores razas para esa disciplina
			{
			"_id": "id_de_la_raza",
		"name": "nombre_Habitual",
		"origin": "Lugar_origen_raza",
		"av_height": 140, //* media de altura en centímentros
		"coats": [
			"Capas_más_habituales" //* colores de pelo
		],
		"img": "URL_imagen_ejemplo",
			"bestDiscipline": "Mejor_disciplina_para_esa_raza" // * dato relacionado
			}
		],
	}
```

## Endpoints:

- General http://localhost:3000/api/v1.
- Razas http://localhost:3000/api/v1/breeds.
- Disciplinas http://localhost:3000/api/v1/disciplines.

| HTTP Request | Endpoint | Descripción                                        |
| ------------ | -------- | -------------------------------------------------- |
| GET          | /:id     | Accede a la raza o disciplina de la que sea el id. |
| GET          | /        | Accede a la lista de razas/disciplinas.            |
| POST         | /        | Crea una entrada nueva de raza/disciplina.         |
| PUT          | /:id     | Actualiza la entrada correspondiente al id.        |
| DELETE       | /:id     | Elimina el elemento correspondiente al id.         |

> > Al usar el método **put** y **post**, no se puede introducir un dato duplicado. Cada **disciplina** puede tener **varias razas** ideales, pero cada **raza** puede optar sólo a **una disciplina** ideal.

![N|Solid](https://verdeyazul.diarioinformacion.com/wp-content/uploads/2021/10/horses-g4a417ec1c_1920-740x494.jpg)

- Para probar, debes saber que hay una lista de razas y otra de disciplinas en la carpeta "data" para hacerte la vida más fácil si no eres un erudito del mundo ecuestre.
- Junto a lo anterior, encontrarás una lista de colores de caballos, que sirve de fuente para añadir o editar el/los color/es de una raza, ya que es un campo requerido. **¡Asegúrate de escribirlo igual que está en ese listado!**
- El último archivo de la carpeta "data" es el array de razas que alimenta la semilla **"seed.js"**.

## Scripts/comandos personalizados

Para levantar el servidor con nodemon para mantenerlo escuchando los cambios:

```
npm run dev
```

Para ejecutar una única vez el proyecto:

```
npm run start
```

Para ejecutar la semilla:
⚠️**¡Cuidado!** Esta es una acción irreversible ⚠️

```
npm run seed
```

## ¡Eso es todo!

Espero que disfrutes del proyecto y sea ameno.
Cualquier duda ponte en contacto conmigo:

- p.a.castrorodriguez@gmail.com
- https://www.linkedin.com/in/paula-alejandra-castro-rodr%C3%ADguez-a671b3208/

![N|Solid](https://www.tiendahipicapinol.com/wp-content/uploads/2016/12/horse-1018835_1920.webp)
¡Gracias por llegar hasta aquí!

**PaulaCR**
