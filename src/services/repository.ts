export interface Repository<T extends { code: string }> {
  getAll(): Promise<T[]>;
  get(_code: T["code"]): Promise<T[] | T>;
}
