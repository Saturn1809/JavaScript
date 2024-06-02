// node 05_Iteration/05_foreach.js

const coding = ["JS","Ruby","CPP","c"]

coding.forEach( function (val) {

        console.log(val);
}
)

// CAllback has no function name 

coding.forEach(  (item) => {
   
    
    console.log(item);
});

function printMe(item){

    console.log(item);
}

coding.forEach(printMe)  // Gave referenc of function

coding.forEach((item , index, arr) => {

    console.log(item,index,arr);

})

// for each has index and array list also

const myCoding = [

    {
        'languageNAme' : "JavaScript",
        'lanugageFileName ': 'JS'
    },
    {
        'languageNAme ': "Java",
        'lanugageFileName ': 'Java'
    },
    {
        'languageNAme' : "Python",
       ' lanugageFileName' : 'PY'
    },
]

myCoding.forEach( (item) => {

        console.log(item.languageNAme);


})

const coding1= ["JS","Ruby","CPP","c"]

const values= coding1.forEach( function (val) {

        // console.log(val);
        return item
}
)
// console.log(values);

const myNums = [1,2,3,4,55,6,7,8,8,10]

my