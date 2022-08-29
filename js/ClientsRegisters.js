export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('dbClient')) || []
  }

  delete(client) {
    const filteredEntries = this.entries.filter(
      entry => entry.nome !== client.nome
    )
    this.entries = filteredEntries
    this.update()
  }
}

export class RegistrationView extends ClientsRegisters {
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(client => {
      const row = this.createRow()

      row.querySelector('.name').textContent = client.nome
      row.querySelector('.email').textContent = client.email
      row.querySelector('.celular').textContent = client.celular
      row.querySelector('.cep').textContent = client.cep
      row.querySelector('.colunaAcao, .btnRemove').onclick = () => {
        const isOk = confirm(`em certeza que deseja deletar ${client.nome}`)
        if (isOk) {
          this.delete(client)
        }
      }
      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')
    const content = ``
    tr.innerHTML = content

    return tr
  }

  openModal() {
    const modal = this.root.querySelector('.modal')
    const actualStyle = modal.style.display
    if (actualStyle == 'block') {
      modal.style.display = 'none'
      console.log('passou aqui 1')
    } else {
      console.log('passou aqui else')
      modal.style.display = 'block'
    }
  }
  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }
}

// const tempClient = {
//   nome: 'Saulossssss',
//   email: 'teste@teste.com.br',
//   celular: '329999999',
//   cep: '329999999'
// }

// const setLocalStorage = clients => {
//   localStorage.setItem('dbClient', JSON.stringify(clients))
// }

// const createClient = client => {
//   const clients = [getDataStorage()]
//   clients.push(client)
//   setLocalStorage(clients)
// }
