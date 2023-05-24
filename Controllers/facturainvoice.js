
let divDetails = document.querySelector('.body-detail');
let btnBuy = document.querySelector('#frmDetail');

let formArray = [];
divDetails.addEventListener("click", (e) => {
    if (e.target.name == "btnRemove[]") {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.name == "btnAdd[]") {
        let cja = document.getElementById(`${e.target.dataset.id}`);
        cja.value = Number(cja.value) + 1;
    }
})
btnBuy.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let colecion = {};
    // for (var pair of data.entries()) {
    //     colecion[pair[0]] = data.getAll(pair[0]);
    // }
    // let obj = [];
    // for (let i = 0; i < Object.entries(colecion)[0][1].length; i++) {
    //     obj.unshift()
    // }
})
document.querySelector('#addItem').addEventListener('click', (e) => {
    divDetails.insertAdjacentHTML("beforeend", crearItemHTML())
})

crearItemHTML = () => {
    let id = Date.now().toString(16);
    let facturaHTML = /* html */ `
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
                    <input type="number" id="${id}" readonly="readonly"  class="form-control" value ="0" name="cantidad">
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="valor_unit" class="form-label">Valor Unit.</label>
                    <input type="number" class="form-control" value ="0" name="valor_unit">
                </div>
            </div>
            <div class="col-1 col-sm-12  text-sm-center text-xl-start p-2 ">
                <button type="button" class="btn w-100 h-100 btn-success" data-id="${id}" name="btnAdd[]">+</button>
            </div>
            <div class="col-1 col-sm-12  text-sm-center text-xl-start p-2">
                <button type="button" class="btn w-100 h-100 btn-danger" name="btnRemove[]">-</button>
            </div>
        </div>
    `;
    return facturaHTML;
}