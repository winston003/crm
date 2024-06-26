import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { IntegrationController } from "../integration.controller";
import { IntegrationService } from "../integration.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  apiEndpoint: "exampleApiEndpoint",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  systemName: "exampleSystemName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  apiEndpoint: "exampleApiEndpoint",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  systemName: "exampleSystemName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    apiEndpoint: "exampleApiEndpoint",
    createdAt: new Date(),
    id: "exampleId",
    integrationDate: new Date(),
    systemName: "exampleSystemName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  apiEndpoint: "exampleApiEndpoint",
  createdAt: new Date(),
  id: "exampleId",
  integrationDate: new Date(),
  systemName: "exampleSystemName",
  updatedAt: new Date(),
};

const service = {
  createIntegration() {
    return CREATE_RESULT;
  },
  integrations: () => FIND_MANY_RESULT,
  integration: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Integration", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IntegrationService,
          useValue: service,
        },
      ],
      controllers: [IntegrationController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /integrations", async () => {
    await request(app.getHttpServer())
      .post("/integrations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        integrationDate: CREATE_RESULT.integrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /integrations", async () => {
    await request(app.getHttpServer())
      .get("/integrations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          integrationDate: FIND_MANY_RESULT[0].integrationDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /integrations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/integrations"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /integrations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/integrations"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        integrationDate: FIND_ONE_RESULT.integrationDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /integrations existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/integrations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        integrationDate: CREATE_RESULT.integrationDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/integrations")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
