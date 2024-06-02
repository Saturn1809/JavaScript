// node 05_Iteration/04_forin.js

const myObject = {

    js:'JAvaScript',
    cpp: 'c++',
    rb:'Ruby',
    swift: "swift by apple"
}
for (const key in myObject) {

    console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const lanugage = ["JS",'hd']

for (const key in lanugage) {
    
        console.log(lanugage[key]);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('Fr',"Frace")



for (const key in map) {

    console.log(key);
    
}