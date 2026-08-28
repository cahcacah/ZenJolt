// tests/server.test.js
/**
 * Tests for ZenJolt server
 */

const { Server } = require('../src/server');

describe('Server', () => {
    let server;

    beforeAll(() => {
        server = new Server(3001);
    });

    test('should create server instance', () => {
        expect(server).toBeDefined();
        expect(server.port).toBe(3001);
    });

    test('should have app configured', () => {
        expect(server.app).toBeDefined();
    });
});
