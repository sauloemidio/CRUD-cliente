export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
  }
}

export class RegistrationView extends ClientsRegisters {
  constructor(root) {
    super(root)
  }
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
