const openModal = document
  .getElementById('modal')
  .classList.add('active') /*adiciona active na classe */

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

const closeModal = document
  .getElementById('modal')
  .classList.remove('active') /*remove active na classe */

document.getElementById('modalClose').addEventListener('click', closeModal)

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
