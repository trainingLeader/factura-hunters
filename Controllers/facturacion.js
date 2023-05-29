let divDetails = document.querySelector('.body-detail');
let btnBuy = document.querySelector('#buy');
let items=[];
document.querySelector('#addItem').addEventListener('click', (e) => {
    divDetails.insertAdjacentHTML('beforeend',crearItemHTML());
})
divDetails.addEventListener("click", (e)=>{
    let cja = document.getElementById(`txt${e.target.dataset.id}`);
    if(e.target.name == "btnRemove"){
        if(Number(cja.value)<=0){
            eliminarItemLista(e.target.dataset.id);
        }else{
            cja.value = Number(cja.value) - 1;
        } 
    }else if(e.target.name == "btnAdd"){
        cja.value = Number(cja.value) + 1;
    }
})
eliminarItemLista = (idIdx) =>{
    let productos = document.querySelectorAll(".frmDataDetail");
    productos.forEach((item) => {
        if(item.id == idIdx){
            let indice = Array.from(divDetails.children).map((val,idx)=>{return (val.id == item.id) ? idx :undefined;}).join("");
            items.splice(indice,1);
            item.remove();
        }
    })
}
btnBuy.addEventListener("click",(e) =>{
    e.preventDefault();
    let productos = document.querySelectorAll(".frmDataDetail");
    productos.forEach((item,id) => {
        let data = Object.fromEntries(new FormData(item));
        items[id] = data;
    })
    console.log(items);
})
crearItemHTML = () => {
    let id = Date.now().toString(16);
    let facturaHTML = /* html */ `
            <form id="${id}" class="frmDataDetail">
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
                            <input type="text" pattern="[0-9]+" id="txt${id}" readonly="readonly"  class="form-control" value ="0" name="cantidad">
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
    `;
    return facturaHTML;
}