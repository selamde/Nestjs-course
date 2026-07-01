<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---

## NestJS Setup Guide

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js) or **yarn**
- **NestJS CLI** (optional but recommended)

### Installing the NestJS CLI

```bash
$ npm install -g @nestjs/cli
```

### Creating a New Project

```bash
$ nest new project-name
```

The CLI will scaffold a new project with the following default structure and install all required dependencies.

### Installing Dependencies (Existing Project)

```bash
$ cd nestjsc1
$ npm install
```

### Running the Application

```bash
# Development (watch mode — auto-restarts on file changes)
$ npm run start:dev

# Standard start
$ npm run start

# Production
$ npm run start:prod
```

The app listens on `http://localhost:3000` by default (configurable via the `PORT` environment variable).

---

## Project Structure

```
src/
├── main.ts                              # Application entry point (bootstrap)
├── app.module.ts                        # Root module
├── app.controller.ts                    # Root controller
├── app.service.ts                       # Root service
├── user.logger.ts                       # Custom logger service
├── guard/
│   └── role.guard.ts                    # Role-based authorization guard
├── middleware/
│   └── api-key.middleware.ts            # API key validation middleware
├── user/
│   ├── user.module.ts                   # User feature module
│   ├── user.controller.ts              # User CRUD controller
│   ├── user.service.ts                  # User business logic service
│   └── dto/
│       ├── create-user.dto.ts           # DTO for creating a user
│       └── update-user.dto.ts           # DTO for updating a user
└── utils/
    └── transform.interceptor.ts         # Global response transform interceptor
```

---

## Core NestJS Concepts

### 1. Modules

Modules are the fundamental organizational unit in NestJS. Every application has at least one module — the **root module** (`AppModule`). Modules group related controllers, services, and other providers together.

#### How Modules Work

A module is a class decorated with `@Module()` that accepts a metadata object with the following properties:

| Property        | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `imports`       | Other modules whose exported providers are needed in this module |
| `controllers`   | Controllers that belong to this module                           |
| `providers`     | Services and other providers to be instantiated by the injector  |
| `exports`       | Providers that should be available to other modules              |

#### In This Project

**Root Module** — `src/app.module.ts`:

```typescript
@Module({
  imports: [UserModule],        // Imports the UserModule feature module
  controllers: [AppController], // Registers the root controller
  providers: [AppService],      // Registers the root service
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes(UserController);
  }
}
```

**Feature Module** — `src/user/user.module.ts`:

```typescript
@Module({
  controllers: [UserController],
  providers: [UserService, LoggerService],
})
export class UserModule {}
```

> **Key Takeaway:** Feature modules (like `UserModule`) encapsulate a specific domain. The root `AppModule` imports them to compose the full application.

---

### 2. Controllers

Controllers handle incoming HTTP requests and return responses. They are decorated with `@Controller()` and use method decorators like `@Get()`, `@Post()`, `@Put()`, and `@Delete()` to define route handlers.

#### Route Mapping

| Decorator              | HTTP Method | Example Route    |
| ---------------------- | ----------- | ---------------- |
| `@Get()`               | GET         | `/user`          |
| `@Get(':id')`          | GET         | `/user/1`        |
| `@Post()`              | POST        | `/user`          |
| `@Put(':id')`          | PUT         | `/user/1`        |
| `@Delete(':id')`       | DELETE      | `/user/1`        |

#### In This Project — `src/user/user.controller.ts`

```typescript
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string) {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }

  @Delete(':id')
  @UseGuards(RoleGuard)  // Protected by the RoleGuard
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(Number(id));
  }
}
```

> **Key Takeaway:** Controllers are thin — they delegate business logic to services and focus on handling request/response concerns.

---

### 3. Services (Providers)

Services contain the core **business logic** of your application. They are decorated with `@Injectable()`, which makes them available for **dependency injection**.

#### In This Project — `src/user/user.service.ts`

```typescript
@Injectable()
export class UserService {
  constructor(private readonly logger: LoggerService) {}

  private users: User[] = [
    { id: 1, name: 'Jhon', email: 'jhon@gmail.com' },
    { id: 2, name: 'doe', email: 'doe@gmail.com' },
  ];

  findAllUsers(name: string = '') { /* filters users by name */ }
  findOneUser(id: number)         { /* finds a single user or throws NotFoundException */ }
  createUser(dto: CreateUserDto)  { /* creates and returns a new user */ }
  updateUser(id: number, dto: UpdateUserDto) { /* updates an existing user */ }
  deleteUser(id: number)          { /* removes a user by id */ }
}
```

#### Custom Logger Service — `src/user.logger.ts`

```typescript
@Injectable()
export class LoggerService {
  log(message: string) {
    console.log('[LOG]', message);
  }
}
```

> **Key Takeaway:** Services are injected into controllers (or other services) via the constructor. NestJS handles instantiation and lifecycle automatically through its IoC (Inversion of Control) container.

---

### 4. Middleware

Middleware functions execute **before** the route handler. They have access to the `Request`, `Response`, and `next()` function. Common use cases include authentication, logging, and request transformation.

#### Request Lifecycle Position

```
Client Request → Middleware → Guards → Interceptors (before) → Controller → Interceptors (after) → Response
```

#### In This Project — `src/middleware/api-key.middleware.ts`

```typescript
@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== 'secret-key-123') {
      throw new UnauthorizedException('Invalid API key');
    }
    next();
  }
}
```

#### Registering Middleware — `src/app.module.ts`

Middleware is registered in a module's `configure()` method via the `MiddlewareConsumer`:

```typescript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes(UserController);
  }
}
```

This applies the `ApiKeyMiddleware` to **all routes** handled by `UserController`. You can also restrict it to specific methods or paths:

```typescript
consumer.apply(ApiKeyMiddleware).forRoutes(
  { path: 'user', method: RequestMethod.POST },
);
```

> **Key Takeaway:** Middleware is applied at the module level and runs before any guard or interceptor. It's ideal for cross-cutting concerns like API key validation.

---

### 5. Guards

Guards determine whether a request should be handled by the route handler. They implement the `CanActivate` interface and return `true` (allow) or `false` / throw an exception (deny). Guards execute **after** middleware but **before** interceptors.

#### In This Project — `src/guard/role.guard.ts`

```typescript
@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();
    const role = request.headers['role'];

    if (role !== 'admin') {
      throw new UnauthorizedException("You're not allowed to perform this action");
    }

    return true;
  }
}
```

#### Applying a Guard to a Route

Guards can be applied at the **method**, **controller**, or **global** level using `@UseGuards()`:

```typescript
@Delete(':id')
@UseGuards(RoleGuard)  // Only users with role 'admin' can delete
deleteUser(@Param('id') id: number) {
  return this.userService.deleteUser(Number(id));
}
```

> **Key Takeaway:** Guards are the go-to mechanism for **authorization** logic. Unlike middleware, guards have access to the `ExecutionContext`, which gives them knowledge of the next handler to be executed.

---

### 6. Interceptors

Interceptors can transform the result returned from a handler, add extra logic before/after method execution, or even completely override the function. They implement the `NestInterceptor` interface.

#### In This Project — `src/utils/transform.interceptor.ts`

```typescript
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<Response>();
    const statusCode = response.statusCode ?? 200;

    return next.handle().pipe(
      map((data) => ({
        statusCode,
        message: 'Success',
        data,
      })),
    );
  }
}
```

This interceptor wraps **every** response in a standardized format:

```json
{
  "statusCode": 200,
  "message": "Success",
  "data": { /* actual response data */ }
}
```

#### Registering Globally — `src/main.ts`

```typescript
app.useGlobalInterceptors(new TransformInterceptor());
```

---

### 7. DTOs & Validation (Pipes)

**DTOs (Data Transfer Objects)** define the shape of data for incoming requests. Combined with `class-validator` decorators and the built-in `ValidationPipe`, NestJS automatically validates request bodies.

#### Create User DTO — `src/user/dto/create-user.dto.ts`

```typescript
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name!: string;

  @IsEmail()
  email!: string;
}
```

#### Update User DTO — `src/user/dto/update-user.dto.ts`

```typescript
export class UpdateUserDto extends PartialType(CreateUserDto) {}
```

> `PartialType()` from `@nestjs/mapped-types` makes all fields from `CreateUserDto` **optional**, which is ideal for PATCH/PUT operations.

#### Enabling Global Validation — `src/main.ts`

```typescript
app.useGlobalPipes(new ValidationPipe());
```

When enabled globally, any request body that doesn't match the DTO constraints will be automatically rejected with a `400 Bad Request` error.

---

### 8. Dependency Injection

NestJS uses a powerful **dependency injection (DI)** system. Any class decorated with `@Injectable()` can be injected into other classes via the constructor.

#### How It Works in This Project

```
AppModule
├── AppController ← injects AppService
├── AppService
└── UserModule
    ├── UserController ← injects UserService
    ├── UserService    ← injects LoggerService
    └── LoggerService
```

Providers are registered in a module's `providers` array and become available to all controllers and services within that module.

---

## API Endpoints

| Method   | Endpoint      | Description           | Auth Required              |
| -------- | ------------- | --------------------- | -------------------------- |
| `GET`    | `/`           | Returns "Hello World" | None                       |
| `GET`    | `/user`       | List all users        | API Key (`x-api-key`)      |
| `GET`    | `/user?name=` | Search users by name  | API Key (`x-api-key`)      |
| `GET`    | `/user/:id`   | Get user by ID        | API Key (`x-api-key`)      |
| `POST`   | `/user`       | Create a new user     | API Key (`x-api-key`)      |
| `PUT`    | `/user/:id`   | Update a user         | API Key (`x-api-key`)      |
| `DELETE` | `/user/:id`   | Delete a user         | API Key + Admin Role       |

### Example Requests

```bash
# Get all users (requires API key)
curl -H "x-api-key: secret-key-123" http://localhost:3000/user

# Create a user
curl -X POST -H "x-api-key: secret-key-123" \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}' \
  http://localhost:3000/user

# Delete a user (requires API key + admin role)
curl -X DELETE -H "x-api-key: secret-key-123" -H "role: admin" \
  http://localhost:3000/user/1
```

---

## Request Lifecycle Summary

The following diagram shows the order in which NestJS processes a request:

```
Incoming Request
      │
      ▼
  Middleware          → ApiKeyMiddleware (validates x-api-key header)
      │
      ▼
  Guards              → RoleGuard (checks admin role on DELETE routes)
      │
      ▼
  Interceptors (pre)  → TransformInterceptor (before handler)
      │
      ▼
  Pipes               → ValidationPipe (validates DTOs)
      │
      ▼
  Controller Handler  → UserController methods
      │
      ▼
  Service             → UserService (business logic)
      │
      ▼
  Interceptors (post) → TransformInterceptor (wraps response)
      │
      ▼
  Response sent to client
```
