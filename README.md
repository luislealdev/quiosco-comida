Este es un proyecto desarrollado por [luisrrleal.com](https://luisrrleal.com)

## Utilizar el proyecto

1. Renombra el archivo .env.template a .env y declara tus variables de entorno

_En caso de no tener una base de datos_, configura el archivo docker-compose.yml y levanta el contenedor con

```bash
docker-compose up -d
```

2. Correr el proyecto en desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) desde tu navegador preferido.

## Historial de versiones

Se agregó el diseño UI de los pedidos para el usuario (commit _18f5e7ffceb2b69c06390d18f41578f263acd059_) (HEAD -> main, origin/main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Domingo 2 Junio 20:30:40 2024

---

Se agregó prisma como ORM para conexión a la base de datos de mongo, así como un archivo nuevo de docker para la creación de un contenedor de postgresql (commit _ea5bc86..30e4eae_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Domingo 2 Junio 2024 11:17pm

---

Se agregó el diseño de las categorias en el sidebar, así como el routing dinámico de las mismas (commit _4408d98..a6a5a47_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Domingo 2 Junio 2024 11:42pm

---

Se agregó el diseño de los productos, además del renderizado dependiendo de la categoría y algunos detalles de experiencia de usuario (commit _3d88d30..1f2f02e_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Lunes 3 Junio 2024 12:05am

---

Se agregó un store para todo el sistema del quisco principal, permite agregar productos, modificar cantidades, calcular subtotales y total. (commit _a15fdab..75db813_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Lunes 3 Junio 2024 10:15am

---

Se agregó el panel de administrador donde se permite ver las órdenes y marcarlas como completadas. (commit _48f1d6e..46c7b9c_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Martes 4 Junio 2024 09:25pm

---

Se empezó con la administración de productos, pudiendo verlos, buscar por términos y se agregó UI para próximas actualizaciones. (commit _01a2d63..35999e1_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Miércoles 5 Junio 2024 08:39pm

---

Ahora es posible la creación de productos mediante el panel de administrador, además se pueden agregar imágenes mediante cloudinary. (commit _35999e1..8de8998_) (main -> main)

Autor: Luis Leal <luisrrleal@gmail.com>

Fecha: Miércoles 5 Junio 2024 10:26pm
