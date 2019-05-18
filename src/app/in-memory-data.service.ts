import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Interface } from './interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 1, name: 'Customer 1',email:'customer1@gmail.com',address:'Hinjawadi',mobile:1234567, 
      array:[
        {
        id:1,
        orderName:'order1',
        quantity:5,
        orderNum:464574
      },
      {
        id:2,
        orderName:'order2',
        quantity:7,
        orderNum:67890
      },
      {
        id:3,
        orderName:'order3',
        quantity:10,
        orderNum:3456767
      },
      {
        id:4,
        orderName:'order4',
        quantity:9,
        orderNum:4456457
      }
    ]
    },
      { id: 2, name: 'Customer 2',address:'Shivaji Nagar',email:'customer2@gmail.com',mobile:1234567890,
      array:[
        {
          id:1,
          orderName:'order5',
          quantity:5,
          orderNum:464574
        },
        {
          id:2,
          orderName:'order6',
          quantity:3,
          orderNum:4
        },
        {
          id:3,
          orderName:'order7',
          quantity:7,
          orderNum:23456
        },
        {
          id:4,
          orderName:'order8',
          quantity:6,
          orderNum:4456457
        }
    
    ]
    },
      { id: 3, name: 'Customer 3',address:'Uiversity',email:'customer3@gmail.com',mobile:123456,
      array:[
        {
          id:1,
          orderName:'order9',
          quantity:5,
          orderNum:464574
        },
        {
          id:2,
          orderName:'order10',
          quantity:4,
          orderNum:44567
        },
        {
          id:3,
          orderName:'order11',
          quantity:3,
          orderNum:42356
        },
        {
          id:4,
          orderName:'order12',
          quantity:2,
          orderNum:3456
        }
    
    ]
     }
    ];
    return {customers};
  }

  genId(customer: Interface[]): number {
    return customer.length > 0 ? Math.max(...customer.map(hero => hero.id)) + 1 : 11;
  }
}
