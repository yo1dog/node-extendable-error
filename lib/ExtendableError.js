class ExtendableError extends Error {
  /**
   * @param {string} [message] 
   */
  constructor(message) {
    super(message);
    this.setUnenumerable('name', this.constructor.name);
    
    Error.captureStackTrace(this, this.constructor);
  }
  
  /**
   * @template {any} T
   * @param {T} obj 
   * @param {string | number | symbol} key 
   * @param {any} value 
   * @returns {T}
   */
  static setUnenumerable(obj, key, value) {
    obj[key] = value;
    ExtendableError.makeUnenumerable(obj, key);
    return obj;
  }
  
  /**
   * @template {any} T
   * @param {T} obj 
   * @param {string | number | symbol} key 
   * @returns {T}
   */
  static makeUnenumerable(obj, key) {
    Object.defineProperty(obj, key, {enumerable: false});
    return obj;
  }
  
  /**
   * @param {string | number | symbol} key 
   * @param {any} value 
   */
  setUnenumerable(key, value) {
    ExtendableError.setUnenumerable(this, key, value);
    return this;
  }
  
  /**
   * @param {string | number | symbol} key 
   */
  makeUnenumerable(key) {
    ExtendableError.makeUnenumerable(this, key);
    return this;
  }
}

module.exports = ExtendableError;
