/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

Route.get('/', async ({response}: HttpContextContract) => {
  response.redirect().toRoute('EmployeesController.index')
}).prefix('/exam/v1/')

Route.group(() => {
  Route.get('/employee', 'EmployeesController.index')

  Route.post('/employee/add/employee', 'EmployeesController.store')

  Route.patch('/employee/edit/:id', 'EmployeesController.update')

  Route.patch('/employee/update/:id', 'EmployeesController.update')

  Route.delete('/employee/delete/:id', 'EmployeesController.destroy')
  Route.get('/employee/viewing/:id', 'EmployeesController.viewableId')

}).prefix('exam/v1')
