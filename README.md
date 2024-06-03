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
