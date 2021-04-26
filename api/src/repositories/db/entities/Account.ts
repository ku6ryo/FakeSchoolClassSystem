import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export default class Account {
  @PrimaryColumn({
    length: 100,
  })
  id: string = ""

  @Column("int")
  type: number = -1

  @Column()
  email: string = ""

  @Column()
  firstName: string = ""

  @Column()
  lastName: string = ""
}
