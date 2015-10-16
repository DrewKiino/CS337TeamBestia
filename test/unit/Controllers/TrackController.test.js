

/**
 * test bootstrap succeeded
 */

import Promise from 'bluebird'
import request from 'supertest-as-promised'
const ObjectId = require('mongodb').ObjectID

// color consoles
import chalk from 'chalk'
const success = chalk.bgGreen.black
const failure = chalk.bgRed.black
const trace = chalk.bgBlue.black


describe.only('Track Controller', () => {

  describe('#send', () => {

    it('should return a message object', done => {

      const postObj = {
        _senderId: "1234",
        _receipientId: "4321",
        text: "Hello, World"
      }

      return request(app)
      .post('/message/send')
      .send(postObj)
      .expect(200)
      .then ( result => {
        sails.log.debug(result)
        expect(result).toEqual(Track())
        return done()
      })
      .catch(done)
    })
  })
})
