import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EmployeeProfilesTables extends BaseSchema {
  protected tableName = 'employee_profiles_tables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('birthdate').notNullable()
      table.string('gender').notNullable()
      table.string('marital_status').notNullable()
      table.string('department').notNullable()
      table.string('position').notNullable()
      table.string('date_hired').notNullable()
      table.string('employment_status').notNullable()
      table.bigInteger('contact_number').notNullable()
      table.string('email')
      table.string('address')
      table.string('city')
      table.string('province')
      table.string('nationality')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
