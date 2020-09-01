import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true })
  public email: string;

  @Column({ default: false })
  public shared: boolean;
}

export default User;
