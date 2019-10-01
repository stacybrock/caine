class Caine {
  constructor() {
    this.verbs = ['smashes', 'hits', 'strikes', 'nails', 'decimates', 'annihilates', 'demolishes', 'smites', 'wallops', 'pummels'];
    this.adjectives = ['immaculate', 'resplendent', 'terrifying', 'sagacious', 'perfect', 'splendid', 'drunken', 'demonic', 'pugnacious', 'fantastic', 'chaotic', 'punishing'];
    this.nouns = ['demon', 'hurricane', 'death', 'volcano', 'cannonball', 'laser', 'tiger', 'ninja'];
    this.attacks = ['kick', 'punch', 'claws', 'slam', 'blast'];
  }

  randomItem(list) {
    return list[Math.floor(Math.random() * (list.length - 0) + 0)];
  }

  getVerb() {
    return this.randomItem(this.verbs);
  }

  getNoun() {
    return this.randomItem(this.nouns);
  }

  getAdjective() {
    return this.randomItem(this.adjectives);
  }

  getAttack() {
    return this.randomItem(this.attacks);
  }
}

module.exports = Caine;
