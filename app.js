
// 1-masala

// function qiymat_tekshir(massiv, qiymat) {
//     let arr = massiv.find(function(element) {
//         return element == qiymat;
//     });

//     if (arr == qiymat) {
//         console.log(`${qiymat} qiymati massivda bor.`);
//     } else {
//         console.log(`${qiymat} qiymati massivda yo'q.`);
//     }
// }


// let massiv = [1, 2, 3, 4, 5];
// qiymat_tekshir(massiv, 2);  





// 2-masala



// const products = [
//   { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//   { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//   { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//   { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
// ];

// function filterProducts(arr, key, value){
//      let res=[];

//      res = arr.filter( v => {
//         return v[key] == value
//      })
//      return res
// }

// console.log(filterProducts(products, 'brand', 'Dell'));



// 3-masala

// const students = [
//     { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
//     { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
//     { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
//   ];
  
//   function students_age(arr, key, value) {
//     let res = arr.filter((student) => {
//       return student[key] == value;
//     });
//     return res;
//   }
  
//   console.log(students_age(students, 'age', 20));
  





// 4-masala


// const tasks = [
//     { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
//     { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
//     { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
//     { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
//   ];
  
//   function sortByPriority(tasks) {
    
//     const priorityOrder = { High: 2, High:3, Medium: 4, Low: 1 };
  
//     tasks.sort((a, b) => {
//       const priorityComparison = priorityOrder[a.priority] - priorityOrder[b.priority];
      
     
//       return priorityComparison;
//     });
  
//     return tasks;
//   }
  
//   const sortedTasks = sortByPriority(tasks);
//   console.log(sortedTasks);
  


// 5-masala


// let arr =[1,2,3,4,5,6,7,8,9];

//     let arr1= arr.slice(2, 6);
  

//  console.log(arr1);

