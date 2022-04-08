//Dependencies

const app = require('../app.js');
const request = require(supertest);


// it('Testing to see if supertest works', () => {
//     expect(1).toBe(1)
// });

describe('Test the root path',() => {
    test('should respond to the GET method', () => {
        return request(app)
            .get('/')
            .then(response => {
                expect(response.text).toBe('Hello, world!')
                expect(response.statusCode).toBe(200)
            })
         })
});



 