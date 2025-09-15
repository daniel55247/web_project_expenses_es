let budgetValue;
let totalExpensesValue = 0;
const expenseEntries = [["groceries", 33],["restaurants", 50],["transport",12],["home",70],["subscriptions", 14], ["groceries",28],["subscriptions", 12] ] ;
let balanceColor;

function sumGastos(){
    totalExpensesValue=0;
for(expense of expenseEntries){
    totalExpensesValue = totalExpensesValue + expense[1];
}
return totalExpensesValue
}

function calculateAverageExpense(){
    let gastosTotales = sumGastos();
    if(expenseEntries.length == 0 ){
        return 0;
    }else{
        return gastosTotales/(expenseEntries.length)
    }
}

function calculateBalance(){
    balance = 0;
    balance = budgetValue - sumGastos();
    return balance;
}

function updateBalanceColor(){
    if ( calculateBalance() < 0 ){
       return balanceColor = "red";
    }else if (calculateBalance() < budgetValue*0.25){
       return balanceColor = "orange";
    }else{
       return balanceColor = "green";
    }
}
function createArray(){
let groceries = 0;
    let restaurants = 0;
    let transport = 0;
    let home = 0 ;
    let subscriptions = 0;
    let categoriesData = [];
    for(expense of expenseEntries){
        if(expense[0]=="groceries"){
            groceries = groceries + expense[1];
        }else if (expense[0]=="restaurants"){
            restaurants = restaurants + expense[1];
        }else if (expense[0]=="transport"){
            transport = transport + expense[1];
        }else if (expense[0]=="home"){
            home  = home  + expense[1];
        }else if (expense[0]=="subscriptions"){
            subscriptions  = subscriptions  + expense[1];
        }
    }
    categoriesData.push(["groceries", groceries]);
    categoriesData.push(["restaurants", restaurants]);
    categoriesData.push(["transport", transport]);
    categoriesData.push(["home", home]);
    categoriesData.push(["subscriptions", subscriptions]);

    return categoriesData;
}

function calculateCategoryExpenses(categoria){
    let categoriesData = createArray();
    for(categorias of categoriesData){
        if (categoria == categorias[0]){
            return categorias[1];
        }else{
            continue
        }
    }
}

function calculateLargestCategory(){
    let array = createArray();
    let valorGastos = 0;
    let categoriaGastos = "";

    for (categoria of array){
        if (categoria[1] > valorGastos){
            categoriaGastos = categoria[0];
            valorGastos = categoria[1];
        }else{
            continue;
        }
    }
    return categoriaGastos;
    
}

function addExpenseEntry(values){

    expenseEntries.push(values);
    totalExpensesValue =  sumGastos();
    
}