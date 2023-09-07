# Proyecto Node.js con Express y KafkaJS

Este proyecto es una aplicación de ejemplo que utiliza Node.js, Express y KafkaJS para demostrar cómo enviar y recibir mensajes a través de Apache Kafka. La aplicación incluye un servidor Express que permite a los usuarios enviar mensajes que se almacenan en un tema de Kafka y también muestra mensajes recibidos en tiempo real en la consola.

## Requisitos

- Node.js (versión 18.17.1)
- Docker (opcional, este proyecto usa kafka en contenedores.)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd tu-proyecto
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración
Configura los detalles de tu clúster Kafka en el archivo config.js.

## Uso

En caso usar Docker iniciamos los servicios definidos en el archivo docker-compose.yml

```bash
docker-compose up -d
```

Inicia la aplicación:
  ```bash
  npm start
  ```
Accede a la aplicación en tu navegador o utiliza una herramienta como Postman para enviar mensajes a través de la ruta /send. La estructura es la siguiente:

```json
POST http://localhost:3000/send
{
    "message": "I'm a new message"
}
```

Abre la consola para ver los mensajes de Kafka en tiempo real.

## Ejemplo

![Ejemplo de uso](<WhatsApp Image 2023-09-07 at 10.37.44.jpg>)

