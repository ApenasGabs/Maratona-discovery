const Modal = {
    open() {
        document
            .querySelector('.modal-overlay').classList.add('active')

    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')

    }
}
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -25000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Freela',
        amount: 50000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -10000,
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'Concerto de pc',
        amount: 50000,
        date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        //soma as entradas
    },
    expenses() {
        //soma todos os gastos 
    },
    total() {
        //ve o que sobra entre os dois 
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {

        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        
        const amount = Utils.formatCurrency(transaction.amount)
        
        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="/assets/minus.svg" alt="Remover Transações">
        </td>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""
        
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("pt-br",{
            style: "currency",
            currency: "BRL"

        })
        return signal + value
    }
}

transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})