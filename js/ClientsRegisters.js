export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        nome: 'zezin',
        email: 'teste@teste.com.br',
        celular: '329999999',
        cep: '329999999'
      },
      {
        nome: 'João',
        email: 'joaao@teste.com.br',
        celular: '4329999999',
        cep: '4329999999'
      }
    ]
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
      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement('tr')
    const content = `
    <td class="name">Zezin</td>
    <td class="email">zezin@zezin.com.br</td>
    <td class="celular">+5532984123341</td>
    <td class="cep">36680000</td>
    <td class="colunaAcao">
      <button id="btnEditar">Editar</button>
      <button>Remover</button>
    </td>`
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

// const getDataStorage = () => {
//   JSON.parse(localStorage.getItem('dbClient')) ?? []
// }

// const setLocalStorage = clients => {
//   localStorage.setItem('dbClient', JSON.stringify(clients))
// }

// const createClient = client => {
//   const clients = [getDataStorage()]
//   clients.push(client)
//   setLocalStorage(clients)
// }
