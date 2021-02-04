const Modal = {
    open() {
        document
            .querySelector('.modal-overlay').classList.add('active')

    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')

    }
} 
const transaction = [{
    id:1,
    description: 'Luz',
    amount: ,
}]

const Transaction = {
    incomes(){
        //soma as entradas
    },
    expenses(){
        //soma todos os gastos 
    },
    total(){
        //ve o que sobra entre os dois 
    }
