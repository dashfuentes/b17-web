import Employee from "../models/Employee.js";

const Mutation = {

    async createEmployee( _ , { name,age,position,code} ) {
        const newEmployee = { name, age, position, code };
        const employee = await Employee.create( newEmployee ); //returns { }
        return await Employee.find()
    },
    async updateEmployee( _, { _id, name, age, position, code } ) {
        //const employee = { name, age, position, code };
        return await Employee.findByIdAndUpdate(_id, { name, age, position, code }, {new: true})
    },
    async deleteEmployee(_, {_id}){
        await Employee.findByIdAndDelete( _id );
        return await Employee.find();
    
    },
}

export default Mutation;