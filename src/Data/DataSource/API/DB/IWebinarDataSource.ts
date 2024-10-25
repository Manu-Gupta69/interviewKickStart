export default interface IWebinarDataSource<T> {
  getAll(): T[];

  getById(id: string): T | undefined;

  create(record: T): Promise<T>;

  removeById(id: string): boolean;

  updateByField(id: string, updatedValue: Partial<T>): T | undefined ;
}
