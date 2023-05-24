let divDetails = document.querySelector('.body-detail');
let btnBuy = document.querySelector('#buy');
let formArray=[];
let items=[];
document.querySelector('#addItem').addEventListener('click', (e) => {
    divDetails.insertAdjacentHTML('beforeend',crearItemHTML());
})
divDetails.addEventListener("click", (e)=>{
    if(e.target.name == "btnRemove"){
        formArray=formArray.filter((item) => item !== e.target.dataset.id)
        e.target.parentElement.parentElement.remove();
    }else if(e.target.name == "btnAdd"){
        let cja = document.getElementById(`txt${e.target.dataset.id}`);
        cja.value = Number(cja.value) + 1;
    }
})
saveItemTemp = () =>{
    if (formArray.length>0){
        formArray.forEach((itemv) =>{
            let dataFrm = document.getElementById(`${itemv}`);
            let dataDetail = Object.fromEntries(new FormData(dataFrm));
            items.push(dataDetail);
        })
    }
    console.log(items);
}
btnBuy.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = new FormData(e.target);
    for(let [name, value] of data) {
        console.log(name + "=" + value);
    };
});
crearItemHTML = () => {
    let id = Date.now().toString(16);
    let facturaHTML = /* html */ `
        <div class="container">
        <form id="${id}">
            <div class="row g-1  row-cols-xl-6 row-cols-sm-4">
                <div class="col">
                    <div class="mb-3">
                        <label for="cod_producto" class="form-label">Cod producto</label>
                        <input type="text" class="form-control" name="cod_producto">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-2">
                        <label for="nombre_producto" class="form-label">Nombre producto</label>
                        <input type="text" class="form-control" name="nombre_producto">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="cantidad" class="form-label">Cantidad</label>
                        <input type="number" id="txt${id}" readonly="readonly"  class="form-control" value ="0" name="cantidad">
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="valor_unit" class="form-label">Valor Unit.</label>
                        <input type="number" class="form-control" value ="0" name="valor_unit">
                    </div>
                </div>
                <div class="col-1 col-sm-6  text-sm-center text-xl-start p-2 ">
                    <button type="button" class="btn w-100 h-100 btn-success" data-id="${id}" name="btnAdd">+</button>
                </div>
                <div class="col-1 col-sm-6  text-sm-center text-xl-start p-2">
                    <button type="button" class="btn w-100 h-100 btn-danger" data-id="${id}" name="btnRemove">-</button>
                </div>
            </div>
        </form>
        </div>
    `;
    formArray.push(id);
    return facturaHTML;
}