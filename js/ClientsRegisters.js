export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class RegistrationView extends ClientsRegisters {
  constructor(root) {
    super(root)
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

  btnRegister = this.root.getElementById('#btnCadCliente')
}

const tempClient = {
  nome: 'Saulossssss',
  email: 'teste@teste.com.br',
  celular: '329999999',
  cep: '329999999'
}

const getDataStorage = () => {
  JSON.parse(localStorage.getItem('dbClient')) ?? []
}

const setLocalStorage = clients => {
  localStorage.setItem('dbClient', JSON.stringify(clients))
}

const createClient = client => {
  const clients = [getDataStorage()]
  clients.push(client)
  setLocalStorage(clients)
}
