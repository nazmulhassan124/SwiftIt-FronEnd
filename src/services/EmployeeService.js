
import axios from 'axios';

const URL = "http://localhost:8080/empinfo";

class EmployeeService {




    getEmployees(){
        return axios.get(URL+'/getAll');
    }

    createEmployee(employee){
        return axios.post(URL+'/post', employee);
    }


    deleteEmployee(id){
        return axios.delete(URL+'/delete/'+id)
     }

     updateEmployee(employee){
        return axios.put(URL + '/update' +  employee);
    }

}

export default new EmployeeService()