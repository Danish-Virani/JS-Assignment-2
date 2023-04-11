function createClosure(num)
{
    return function add_Clousure(x)
    {
        return x+num;
    }
}


//MAIN

const closure=createClosure(3);
const add_clos=closure(2);
console.log(add_clos);
