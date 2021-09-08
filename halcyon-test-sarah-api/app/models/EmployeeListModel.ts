import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EmployeeProfilesTable extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public first_name: String

  @column()
  public last_name: String

  @column.dateTime()
  public birthdate: DateTime

  @column()
  public gender: String

  @column()
  public marital_status: String

  @column()
  public department: String

  @column()
  public position: String

  @column.dateTime()
  public date_hired: DateTime

  @column()
  public employment_status: String

  @column()
  public contact_number: number

  @column()
  public email: String

  @column()
  public address: String

  @column()
  public city: String

  @column()
  public province: String

  @column()
  public nationality: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
