const t = new Date().toLocaleDateString().split('/').join('-')
console.log(t);


const data = new Date().toISOString().split('T')[0]
console.log(data);
