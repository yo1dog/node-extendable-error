declare class ExtendableError extends Error {
  public static setUnenumerable<T>(obj: T, key: string, value: any): T;
  public static makeUnenumerable<T>(obj: T, key: string): T;
  
  public setUnenumerable(key: string, value: any): this;
  public makeUnenumerable(key: string): this;
}

export = ExtendableError;