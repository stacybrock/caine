/* DynamoDB storage backend class
 */

const util = require('util');

// Import the AWS SDK for JavaScript
const AWS = require('aws-sdk');

const StorageBackend = require('./wrapper');


class DynamoDbBackend extends StorageBackend {
  constructor(table='cainebot', region='us-west-2') {
    super();
    this._table = table;

    // Create DynamoDB service object
    AWS.config.update({region: region});
    this._ddb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

    this.verbsPromise = this._getWords('verbs');
    this.nounsPromise = this._getWords('nouns');
    this.adjectivesPromise = this._getWords('adjectives');
    this.attacksPromise = this._getWords('attacks');
  }

  async _getWords(type) {
    const result = await this._getWordList(type);
    return result;
  }

  _getWordList(key) {
    return new Promise((resolve, reject) => {
      var params = {
        ExpressionAttributeValues: {
          ':k': key
        },
        KeyConditionExpression: 'keyName = :k',
        TableName: this._table
      };

      var data = this._ddb.query(params, function(err, data) {
        if (err) {
          reject("[_getWordList()] Error: ", err);
        } else {
          if (data.Items.length > 0) {
            console.log('_getWordList() promises', data.Items[0].value);
            resolve(data.Items[0].value);
          } else {
            console.log('_getWordList() promises', data.Items);
            resolve(data.Items);
          }
        }
      });
    });
  }
}

module.exports = DynamoDbBackend;
