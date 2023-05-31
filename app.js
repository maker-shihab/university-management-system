const maker = {
    name: 'Maker',
    age: 24,
    role: 'Developer'
}
const maker2 = ['Maker', 24, 'Developer'];
const funMaker = ([name, age, role]) => {
    console.log(name);
}
funMaker(maker2);

