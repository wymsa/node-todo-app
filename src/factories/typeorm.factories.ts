import { BaseEntity, DataSource, EntityTarget } from 'typeorm';
import DataSourceInstance from '../common/typeorm/typeorm.config';

let dataSourceInstance: DataSource | null = null;

export function createDataSource() {
  if (!dataSourceInstance) {
    dataSourceInstance = DataSourceInstance;
    return dataSourceInstance;
  }

  return dataSourceInstance;
}

export function createEntityRepository<T extends EntityTarget<any>>(entity: T) {
  const dataSource = createDataSource();
  return dataSource.getRepository(entity);
}
