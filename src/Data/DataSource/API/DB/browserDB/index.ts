import IWebinarDataSource from "../IWebinarDataSource";

// Create a generic class for managing the LocalDB
class LocalDB<T> implements IWebinarDataSource<T> {
  private table: string;

  constructor(tableName: string) {
    this.table = tableName;

    // Initialize localStorage with an empty array if the table doesn't exist
    if (typeof window !== 'undefined') {
      const getTable = this.getTable();
      if (!getTable) {
        this.setTable(JSON.stringify([]));
      }
    }
  }

  private setTable(value: string) {
    window.localStorage.setItem(this.table, value);
  }

  private getTable() {
    return window.localStorage.getItem(this.table);
  }

  private getAllData() {
    const tableData = this.getTable();
    return tableData ? JSON.parse(tableData) : [];
  }

  // Get all records
  getAll(): T[] {
    return this.getAllData() as T[];
  }

  // Get a record by ID
  getById(columnId: string): T | undefined {
    const item = this.getAll().find((record: any) => record.id === columnId);
    return item ? (item as T) : undefined;
  }

  // Remove a record by ID
  removeById(columnId: string): boolean {
    const updatedRecords = this.getAll().filter((record: any) => record.id !== columnId);
    this.setTable(JSON.stringify(updatedRecords));
    return updatedRecords.length < this.getAll().length;
  }

  // Create a new record
  create(record: T) : Promise<T> {
     let updatedRecord : T = {
      id : "ASdf",
      ...record
     }
    const allRecords = this.getAll();
    allRecords.push(updatedRecord);
    this.setTable(JSON.stringify(allRecords));
    return Promise.resolve(record);
  }

  // Update a record by ID
  updateByField(id: string, updatedValue: Partial<T>): T | undefined  {
    const allRecords = this.getAll();
    const recordIndex = allRecords.findIndex((record: any) => record.id === id);

    if (recordIndex > -1) {
      const updatedRecord = { ...allRecords[recordIndex], ...updatedValue };
      allRecords[recordIndex] = updatedRecord;
      this.setTable(JSON.stringify(allRecords));
      return updatedRecord;
    }
 
  }
}

export default LocalDB;
