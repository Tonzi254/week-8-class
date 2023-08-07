const request = require('supertest');
const assert = require('assert');

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.status(200).json({ running: true });
});

describe('Base endpoint testing', () => {
    it('Performs a GET on the base endpoint', () => {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
            });
    });

});