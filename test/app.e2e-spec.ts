import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Module Tests (e2e)', () => {
  let projectId: any;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_hackathon_test',
        autoLoadEntities: true,
        synchronize: true,
        logging: false,
        dropSchema: true
        }),
      AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('01 - Must register the project', async () => {
    const response = await request(app.getHttpServer())
      .post('/project/register')
      .send({
        projectName: 'Root',
        projectLink: 'root.com',
        projectLogo: '',
        projectPit: 'Root root'
      });
      expect(HttpStatus.OK)

      projectId = response.body.id
  });

  it('02 - Must not duplicate the project', async () => {
    request(app.getHttpServer())
    .post('/project/register')
    .send({
      projectName: 'Root',
      projectLink: 'root.com',
      projectLogo: '',
      projectPit: 'Root root'
    });
    expect(HttpStatus.BAD_REQUEST);
  });

  it('03 - Must list all Projects', async () =>{
    request(app.getHttpServer())
      .get('/project/all')
      .send({})
    expect(HttpStatus.OK)
  })

  it('04 - Must update Project', async () => {
    request(app.getHttpServer)
    .put('/project/update')
    .send({
      id: projectId,
      projectName: 'Root1',
      projectLink: 'root1.com',
      projectLogo: '',
      projectPit: 'Root root'
  })
  .then(response => {
    expect('Root Updated').toEqual(response.body.name)
  })
  expect(HttpStatus.OK)
  });

  it('05 - Must register the class', async () => {
    const response = await request(app.getHttpServer())
      .post('/class/register')
      .send({
        description: 'root root root',
        isActive: false
      });
      expect(HttpStatus.OK)

      projectId = response.body.id
  });

  it('06 - Must not duplicate the class', async () => {
    request(app.getHttpServer())
    .post('/class/register')
    .send({
      description: 'root root root',
      isActive: false
    });
    expect(HttpStatus.BAD_REQUEST);
  });

  it('07 - Must list all class', async () =>{
    request(app.getHttpServer())
      .get('/class/all')
      .send({})
    expect(HttpStatus.OK)
  })

  it('08 - Must update class', async () => {
    request(app.getHttpServer)
    .put('/class/update')
    .send({
      description: '1 root root',
      isActive: true
  })
  .then(response => {
    expect('Root Updated').toEqual(response.body.name)
  })
  expect(HttpStatus.OK)
  });

  it('09 - Must register the group', async () => {
    const response = await request(app.getHttpServer())
      .post('/group/register')
      .send({
        groupNumber: '01',
        moreInfos: 'rootrooooot'
      });
      expect(HttpStatus.OK)

      projectId = response.body.id
  });

  it('10 - Must not duplicate the group', async () => {
    request(app.getHttpServer())
    .post('/group/register')
    .send({
      groupNumber: '01',
      moreInfos: 'rootrooooot'
    });
    expect(HttpStatus.BAD_REQUEST);
  });

  it('11 - Must list all group', async () =>{
    request(app.getHttpServer())
      .get('/group/all')
      .send({})
    expect(HttpStatus.OK)
  })

  it('12 - Must update group', async () => {
    request(app.getHttpServer)
    .put('/group/update')
    .send({
      groupNumber: '02',
      moreInfos: 'rootrooooot'
  })
  .then(response => {
    expect('Root Updated').toEqual(response.body.name)
  })
  expect(HttpStatus.OK)
  });

});

