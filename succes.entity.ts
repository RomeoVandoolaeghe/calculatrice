import { BaseEntity, Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
@Entity('succes')
export class succes_entity extends BaseEntity {
 @PrimaryColumn()
id: number;
 @Column()
title: number;
 @Column()
price: Date;
}