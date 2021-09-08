import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import EmployeeProfilesTable from "App/models/EmployeeListModel";
import EmployeeValidation from "App/validate/EmployeeValidation";

export default class EmployeesController {
  public async index(ctx: HttpContextContract) {
    const employees = await EmployeeProfilesTable.query().orderBy("id", "asc");

    if (!employees) {
      return ctx.response.status(404).json({
        status: "failed",
        message: "There no data in the database yet.",
      });
    }

    return ctx.response.status(200).json({
      status: "success",
      data: employees,
    });
  }

  public async store(ctx: HttpContextContract) {
    try {
      const payload = await ctx.request.validate(EmployeeValidation);

      const employee = await EmployeeProfilesTable.create(payload);

      return ctx.response
        .status(201)
        .json({ status: "success", data: employee });
    } catch (error) {
      ctx.response.json({ error: error.messages });
    }
  }

  public async update(ctx: HttpContextContract) {
    const employee = await EmployeeProfilesTable.query().where("id", ctx.params.id);

    if (!employee) {
      return ctx.response.status(404).json({
        status: "failed",
        message: "No such file exist in the database",
      });
    }
    try {
      // await ctx.request.validate(EmployeeValidation);

      await EmployeeProfilesTable.query().where('id', ctx.params.id).update(ctx.request.body())

      const newData = await EmployeeProfilesTable.find(ctx.params.id);

      return ctx.response.status(200).json({
        status: "success",
        data: newData,
      });
    } catch (error) {
      ctx.response.badRequest(error.messages);
    }
  }
  public async viewableId (ctx:HttpContextContract) {
    const employee = await EmployeeProfilesTable.query().where("id", ctx.params.id);

    if (employee.length === 0 ) {
      return ctx.response.status(404).json({
        status: "failed",
        message: "No such file exist in the database",
      });
    }
    return employee
  }
  public async destroy(ctx: HttpContextContract) {
    const employee = await EmployeeProfilesTable.find(ctx.params.id);

    if (!employee) {
      return ctx.response.status(404).json({
        status: "failed",
        message: "No such file exist in the database",
      });
    }

    employee.delete();

    return ctx.response.status(200).json({ status: "deleted" });
  }
  public async viewId ({params}:HttpContextContract) {
    const employee = await EmployeeProfilesTable.find(params.id)
    return employee
  }

}

