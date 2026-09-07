# Desarrollo de una API REST para gestión de usuarios

La empresa necesita una API REST para gestionar usuarios en un sistema de banca digital. La API debe permitir la creación, lectura, actualización y eliminación de usuarios, así como la documentación de las endpoints utilizando Swagger. El sistema debe manejar errores de forma idempotente y proporcionar una respuesta coherente ante solicitudes duplicadas.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Desarrollo de API REST con enfoque en buenas prácticas y documentación |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de usuario

**Objetivo:** Definir el modelo de datos para los usuarios, incluyendo los campos necesarios y las validaciones.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar los campos necesarios para un usuario (nombre, email, contraseña, rol, etc.)
- Definir las validaciones para cada campo (longitud mínima/máxima, formato de email, etc.)
- Establecer la idempotencia para la creación de usuarios mediante una clave única

**Entregable:** Modelo de datos para usuarios con validaciones y clave de idempotencia definida

<details>
<summary>Pistas de conocimiento</summary>

- Considera las restricciones de negocio para cada campo del usuario
- Piensa en cómo manejarías los errores de validación

</details>

### Fase 2: Implementación de endpoints CRUD

**Objetivo:** Implementar las endpoints CRUD para la gestión de usuarios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear las endpoints para crear, leer, actualizar y eliminar usuarios
- Asegurar que las endpoints manejen los errores de forma idempotente
- Documentar las endpoints utilizando Swagger

**Entregable:** Endpoints CRUD para usuarios con manejo idempotente de errores y documentación en Swagger

<details>
<summary>Pistas de conocimiento</summary>

- Revisa las mejores prácticas para el diseño de APIs REST
- Considera cómo documentar cada endpoint de forma clara y concisa

</details>

### Fase 3: Pruebas y optimización

**Objetivo:** Realizar pruebas unitarias y de integración para asegurar la calidad del código y optimizar el rendimiento.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Escribir pruebas unitarias para cada endpoint
- Realizar pruebas de integración para asegurar la consistencia del sistema
- Identificar y optimizar posibles cuellos de botella en el rendimiento

**Entregable:** Pruebas unitarias y de integración para las endpoints, con optimización de rendimiento identificada

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de testing para asegurar la calidad del código
- Considera cómo medir y mejorar el rendimiento del sistema

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un modelo de datos y por qué es importante en el desarrollo de una API REST?
- **paraQueSirve**: ¿Para qué sirven las validaciones en los campos de un modelo de datos?
- **comoSeUsa**: ¿Cómo se usa Swagger para documentar una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar endpoints CRUD y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de una API REST en términos de idempotencia y manejo de errores?

## Criterios de Evaluacion

- Definición del modelo de datos para usuarios con validaciones y clave de idempotencia
- Implementación de endpoints CRUD con manejo idempotente de errores y documentación en Swagger
- Realización de pruebas unitarias y de integración, con identificación y optimización de rendimiento

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
