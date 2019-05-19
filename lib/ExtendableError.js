module.exports = class ExtendableError extends Error {
  /**
   * @param {string} message 
   */
  constructor(message) {
    super(message);
    this.setUnenumerable('name', this.constructor.name);
    
    Error.captureStackTrace(this, this.constructor);
  }
  
  static setUnenumerable(obj, key, value) {
    obj[key] = value;
    ExtendableError.makeUnenumerable(obj, key);
  }
  
  static makeUnenumerable(obj, key) {
    Object.defineProperty(obj, key, {enumerable: false});
  }
  
  setUnenumerable(key, value) {
    ExtendableError.setUnenumerable(this, key, value);
  }
  
  makeUnenumerable(key) {
    ExtendableError.makeUnenumerable(this, key);
  }
};