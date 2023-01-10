import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

      
    
id=5;
  customers=[
    { id:1,
      "firstName":"Sandeep",
      "lastName": "Kumar",
      "sex": "Male",
      "skill":"Java FSD",
      "userName": "sandeepkumar@gmail.com",
      "email":"sandeepkumar@gmail.com",
      "address":"flat No:205 ",
      "address2": "srinivasa towers",
      "city":"Nellore",
      "state":"Andhrapradesh",
      "pincode":523004

    },
    { id:2,
      "firstName":"madhan",
      "lastName": "B",
      "sex": "Male",
      "skill":"Java Backend",
      "userName": "Madhan@gmail.com",
      "email":"madhan@gmail.com",
      "address":"flat No:205 ",
      "address2": "srinivasa towers",
      "city":"Nellore",
      "state":"Andhrapradesh",
      "pincode":523004

    },

    { id:3,
      "firstName":"Sravs",
      "lastName": "K",
      "sex": "Female",
      "skill":"Manual testing",
      "userName": "sravs879@gmail.com",
      "email":"sravs345@gmail.com",
      "address":"flat No:205 ",
      "address2": "srinivasa towers",
      "city":"Nellore",
      "state":"Andhrapradesh",
      "pincode":523004

    },
    { id:4,
      "firstName":"sanju",
      "lastName": "Bellamkonda",
      "sex": "male",
      "skill":"Automation testing",
      "userName": "sanju@gmail.com",
      "email":"sanju123@gmail.com",
      "address":"flat No:205 ",
      "address2": "srinivasa towers",
      "city":"Nellore",
      "state":"Andhrapradesh",
      "pincode":523004

    }
  ]

  url = "http://localhost:8081/customers"

  constructor(private http:HttpClient) { }

  fetchCustomers(){
    
   return this.http.get(this.url)
  }

  deleteCustomer(id){
   return this.http.delete(this.url +"/"+ id)
  }

  postCustomer(customer:CustomerService):Observable<Object>{
  return  this.http.post(this.url,customer);
  console.log(customer);

  }

  putCustomer(customer:CustomerService):Observable<Object>{
   return this.http.put(this.url,customer)
  }

  addtocustomer(customer:CustomerService){
    this.customers.push({id:this.id++, 
      'firstName':customer.firstName,
      'lastName':customer.lastName,
      'sex': customer.sex,
      'skill':customer.skill,
      'userName': customer.userName,
      'email':customer.email,
      'address':customer.address,
      'address2': customer.address2,
      'city':customer.city,
      'state':customer.state,
      'pincode':customer.pincode,
    });
  }

  deleteCustomerThroughIndex(index){
  
      this.customers.splice(index,1); 
    
  }

  
}
