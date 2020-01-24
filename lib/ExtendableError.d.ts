declare class ExtendableError extends Error {
  public static setUnenumerable<T>(obj: T, key: string | number | symbol, value: any): T;
  public static makeUnenumerable<T>(obj: T, key: string | number | symbol): T;
  
  public setUnenumerable(key: string | number | symbol, value: any): this;
  public makeUnenumerable(key: string | number | symbol): this;
}

export = ExtendableError;