import Employee from "../models/Employee.js"

const Query = {


    async getEmployees() {
        const employees = await Employee.find();
        return employees
    }
}

export default Query