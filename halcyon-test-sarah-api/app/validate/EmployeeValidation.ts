import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmployeeValidation {
  constructor (protected ctx: HttpContextContract) {
  }

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    first_name: schema.string({ trim: true }, [
      rules.minLength(2),
      rules.maxLength(20),
    ]),
    last_name: schema.string({ trim: true }, [
      rules.minLength(2),
      rules.maxLength(20),
    ]),
    birthdate: schema.date({ format: "yyyy-mm-dd" }),
    gender: schema.enum(["Male", "Female"] as const),
    marital_status: schema.string({ trim: true }),
    department: schema.enum(["Admin", "Engineering", "Finance"] as const),
    position: schema.string({ trim: true }),
    date_hired: schema.date({ format: "yyyy-mm-dd" }),
    employment_status: schema.enum([
      "Casual",
      "Probationary",
      "Regular",
    ] as const),
    contact_number: schema.number(),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    city: schema.string.optional({ trim: true }),
    address: schema.string.optional({ trim: true }),
    province: schema.string.optional({ trim: true }),
    nationality: schema.string.optional({ trim: true }),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    'first_name.required': 'First name must not be empty',
    'last_name.required': 'Last name must not be empty',
    'birthdate.format': 'Birth date must be formated as {{ format }}',
    'birthdate.required': 'Birth date must not be empty',
    'gender.required': 'Gender must not be empty',
    'marital_status.required': 'Marital status must not be empty',
    'department.required': 'Department must not be empty',
    'department.enum': 'The value must be one of {{ options.choices }}',
    'position.required': 'Position must not be empty',
    'date_hired.required': 'Date hired must not be empty',
    'date_hired.format': 'Date hired must be formated as {{ format }}',
    'employment_status.required': 'Employment status must not be empty',
    'employment_status.enum': 'The value must be one of {{ options.choices }}',
    'contact_number.required': 'Contact number must not be empty',
    'contact_number.number': 'Contact number must be a number',
    'email.unique': 'Email already exist',
    'first_name.minLength': 'First name must be two(2) to twenty(20) characters',
    'last_name.minLength': 'Last name must be two(2) to twenty(20) characters',
    'first_name.maxLength': 'First name must not exceed twenty(20) characters',
    'last_name.maxLength': 'Last name must not exceed twenty(20) characters',
  }
}
