const DynamoDbBackend = require('./storage/dynamodb');

class Caine {
  constructor() {
    this.storage = new DynamoDbBackend();
  }

  async attack(bot, attacker, target) {
    const promises = this.storage.getStoragePromises();
    await Promise.all(promises).then(async data => {
      const _randomItem = list => {
        return list[Math.floor(Math.random() * (list.length - 0) + 0)];
      };
      const verb = _randomItem(data[0]);
      const noun = _randomItem(data[1]);
      const adjective = _randomItem(data[2]);
      const attack = _randomItem(data[3]);
      await bot.say(`${attacker} ${verb} ${target} with their ${adjective} ${noun} ${attack}!`);
    });
  }
}

module.exports = Caine;
