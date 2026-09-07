import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: any) {
  const options = new DocumentBuilder()
   .setTitle('API de Usuarios')
   .setDescription('API REST para gestión de usuarios')
   .setVersion('1.0')
   .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}