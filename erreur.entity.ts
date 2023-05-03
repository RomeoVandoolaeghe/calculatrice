import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('erreur')
export class erreur_entity extends BaseEntity {
 @PrimaryColumn()
id: number;
 @Column()
title: string;
 @Column()
price: number;
}