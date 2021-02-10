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
        addTransaction(transaction, index){
            console.log(transaction)
const tr = document.createElement('tr')
tr.innerHTML = DOM.innerHTMLTransaction()
    },
    innerHTMLTransaction() {
        const html = `
        <td class="description">Luz</td>
        <td class="expense">R$500</td>
        <td class="date">23/05/2022</td>
        <td>
            <img src="/assets/minus.svg" alt="Remover Transações">
        </td>
        `
        return html
    }
}

DOM.addTransaction(transactions[2])