import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class TodosEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'varchar' })
  title: string;
  @Column({ type: 'boolean', default: false, nullable: true })
  isCompeted?: boolean;
}
