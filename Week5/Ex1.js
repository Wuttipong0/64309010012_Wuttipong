let Order = [{
    "Cuatomer" : "Mr.Lee",
    "ItemOrder" : ["A4 paper", "Ruler"],
    "Qty": [5,2],
    "Price": [120, 25]
},
{
    "Cuatomer" : "Mr.Yue",
    "ItemOrder" : ["Flash Drive", "A4 paper"],
    "Qty": [2,3],
    "Price": [130, 120]
},
{
    "Cuatomer" : "Mr.Aur",
    "ItemOrder" : ["Flash Drive", "A4 paper"],
    "Qty": [3,7],
    "Price": [110, 20]
}
]
//console.log(order[0].Item.length);
for(i=0;i<order.length;i++) { 
    let sum=0;
    for(let j = 0; j < Order[i].ItemOrder.length; j++) {
        sum += Order[i].Qty[j] * Order[i].Price[j];
    }
    console.log(Order[i].Cuatomer,sum)
}