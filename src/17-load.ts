// Load the full build.
//var _ = require('lodash');
// npm i --save-dev @types/lodash
import _ from 'lodash'

const data = [
  {
    username : 'nico',
    role : 'admin'
  },
  {
    username : 'valentina',
    role : 'seller'
  },
  {
    username : 'Zulema',
    role : 'seller'
  },
];

const rta =  _.groupBy(data , (item)=> item.role);
console.log(rta);
