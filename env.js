export const PORT = isNaN(process.env.PORT) ? 3001 : parseInt(process.env.PORT);
/**
 * 
 Starting the validation whether it is a number or not. In case if it is not a number then set the Default PORT i.e., (3001) or if it is in any other form (such as, string or number or boolean) then check it by using parseInt();
 * 
 */
 

// // // ---------------------------------------------------------------------------------------------


import { z, ZodError } from "zod";



// const userAge = 18; // // Providing the user age here;
// const ageSchema = z.number().min(18).max(100).int(); 
// // // // Created the method or schema to check or validate the user age whether he/she is qualified or not;
// // // // With minimun, maximun, number or integer it is or not;

// const parseAgeSchema = ageSchema.parse(userAge);
// console.log(parseAgeSchema);
// // // // // Firstly, close the PORT 9001;
// // // // // Secondly, run the command node --watch env.js;
// // // // // Thirdly, we are getting the Ouput on Terminal as :- 18
// // // // // As the we have given the userAge is 18 that's why we are getting the Output as 18 without any error;




// // // ---------------------------------------------------------------------------------------------




// const userAge = 17; // // Providing the user age here;
// const ageSchema = z.number().min(18).max(100).int(); 
// const parseAgeSchema = ageSchema.parse(userAge);
// console.log(parseAgeSchema);
// // // // // Here, we are getting the Ouput on Terminal as :- error;
// // // // As the we have given the userAge is 17. It is showing the error;
/**
 * 
 * ZodError: [
  {
    "code": "too_small",
    "minimum": 18,
    "type": "number",
    "inclusive": true,
    "exact": false,
    "message": "Number must be greater than or equal to 18",
    "path": []
  }
]
    at get error (file:///C:/Users/shivachouhan/Desktop/Express_JS/030--Validate_EnvVar_ExpressJS_Using_Zod/node_modules/zod/lib/index.mjs:587:31)
    at ZodNumber.parse (file:///C:/Users/shivachouhan/Desktop/Express_JS/030--Validate_EnvVar_ExpressJS_Using_Zod/node_modules/zod/lib/index.mjs:663:22)
    at file:///C:/Users/shivachouhan/Desktop/Express_JS/030--Validate_EnvVar_ExpressJS_Using_Zod/env.js:20:34
    at ModuleJob.run (node:internal/modules/esm/module_job:272:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:583:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:98:5) {
  issues: [
    {
      code: 'too_small',
      minimum: 18,
      type: 'number',
      inclusive: true,
      exact: false,
      message: 'Number must be greater than or equal to 18',
      path: []
    }
  ],
  addIssue: [Function (anonymous)],
  addIssues: [Function (anonymous)],
  errors: [
    {
      code: 'too_small',
      minimum: 18,
      type: 'number',
      inclusive: true,
      exact: false,
      message: 'Number must be greater than or equal to 18',
      path: []
    }
  ]
}

 */

// // // // It is showing what mistakes, we have done with full details and which of the things we can access in this ZodError;




// // // ---------------------------------------------------------------------------------------------


// // // Use of try and catch block;

// const userAge = 17; // // Providing the user age here;
// // const userAge = 20; // // Providing the user age here;
// const ageSchema = z.number().min(18).max(100).int(); 
// // const parseAgeSchema = ageSchema.parse(userAge);
// // console.log(parseAgeSchema);
// try {
//     const parseAgeSchema = ageSchema.parse(userAge);
//     console.log(parseAgeSchema); // // Success case;
// } catch (error) {
//     // // instanceof is a JavaScript operator used to check if an object is an instance of a specific class or constructor.
//     if(error instanceof ZodError)
//     {
//         console.log(error.issues[0].message); 
//         // // Display error message only;
//         // // Instead of ZodError:
//     }
//     else
//     {
//         console.log("Unexpected error :", error);
//     }
// }
// // // // // Here, we are getting the Ouput on Terminal as :- Number must be greater than or equal to 18;
// // // // // (Number must be greater than or equal to 18) this is getting because of this => const userAge = 17;
// // // // // If we change this => const userAge = 20 then it's output is :- 20;



// // // // ---------------------------------------------------------------------------------------------





const userAge = 20; // // Providing the user age here;
const ageSchema = z.number().min(18).max(100).int(); 
const {data, error, success} = ageSchema.safeParse(userAge); // // safeParse give power to access all this;
console.log(data, error, success);
// // // // // Here, we are getting the Ouput on Terminal as :- 20 undefined true