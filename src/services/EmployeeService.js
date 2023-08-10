
import axios from 'axios';

const URL = "http://localhost:8080/empinfo";

class EmployeeService {


    getEmployees(){
        return axios.get(URL+'/getAll');
    }

    deleteEmployee(id){
        return axios.delete(URL+'/delete/'+id)
     }

}

export default new EmployeeService()