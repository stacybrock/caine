/* storage backend class
 *
 * Storage backend implementations should extend this class and
 * create promises for the following class variables:
 *   - verbsPromise
 *   - nounsPromise
 *   - adjectivesPromise
 *   - attacksPromise
 */

class StorageBackend {
  constructor() {
    this.verbsPromise = null;
    this.adjectivesPromise = null;
    this.nounsPromise = null;
    this.attacksPromise = null;
  }

  getStoragePromises() {
    return [
      this.verbsPromise,
      this.nounsPromise,
      this.adjectivesPromise,
      this.attacksPromise
    ];
  }
}

module.exports = StorageBackend;
