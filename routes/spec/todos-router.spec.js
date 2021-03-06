const request = require('supertest');
const app = require('../../app');
const Todo = require('../../models/todo');

const exampleTodos = [
  { id: 1, name: 'make bed', completed: true },
  { id: 2, name: 'prep code demo', completed: false }
];

beforeAll(done => {
  Todo.bulkCreate(exampleTodos).then(todos => done());
});

afterAll(done => {
  Todo.destroy({ where: {} }).then(todos => done());
});

describe('GET /todos', () => {
  it('returns a list of all todos', done => {
    return request(app)
      .get('/todos')
      .expect(200, exampleTodos, done);
  });
});

describe('POST /todos', () => {
  it('returns the newly created todo', done => {
    const body = { name: 'check off previous todos', completed: false };

    return request(app)
      .post('/todos')
      .send(body)
      .expect((res) => res.body.id = 'fixed id')
      .expect(200, { ...body, id: 'fixed id' }, done);
  });
});
