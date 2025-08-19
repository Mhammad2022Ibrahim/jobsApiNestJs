import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.error('Error starting app:', err);
});
// This code initializes a NestJS application, enabling global validation pipes
// to ensure that only whitelisted properties are allowed in incoming requests.
// The application listens on port 3000, and any errors during startup are logged to the console.
// The `bootstrap` function is the entry point of the application, creating an instance of the `AppModule` and starting the server.
