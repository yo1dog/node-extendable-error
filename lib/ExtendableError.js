module.exports = class ExtendableError extends Error {
  /**
   * @param {string} [message] 
   */
  constructor(message) {
    super(message);
    this.setUnenumerable('name', this.constructor.name);
    
    Error.captureStackTrace(this, this.constructor);
  }
  
  static setUnenumerable(obj, key, value) {
    obj[key] = value;
    ExtendableError.makeUnenumerable(obj, key);
    return obj;
  }
  
  static makeUnenumerable(obj, key) {
    Object.defineProperty(obj, key, {enumerable: false});
    return obj;
  }
  
  setUnenumerable(key, value) {
    ExtendableError.setUnenumerable(this, key, value);
    return this;
  }
  
  makeUnenumerable(key) {
    ExtendableError.makeUnenumerable(this, key);
    return this;
  }
};