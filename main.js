const openModal = document
  .getElementById('modal')
  .classList.add('active') /*roda esta funcao adicionando active na classe */

document
  .getElementById('cadastrarCliente')
  .addEventListener('click', openModal) /*escuta clique*/

const closeModal = document
  .getElementById('modal')
  .classList.remove('active') /*roda esta funcao adicionando active na classe */

document
  .getElementById('modalClose')
  .addEventListener('click', closeModal) /*escuta clique*/

const tempClient = {
  nome: 'Saulo',
  email: 'crudteste@gmail.com',
  celular: '989991234',
  cep: '36680000'
}

function getDataLocalStorage() {
  JSON.parse(localStorage.getItem('db_client')) ?? []
}

function setDataLocalStorage(dbClient) {
  localStorage.setItem('db_client', JSON.stringify(dbClient))
}

function createCliente(client) {
  const clients = getDataLocalStorage()
  clients.push(client)
  setDataLocalStorage(clients)
}

document
  .getElementById('btnEditar')
  .addEventListener('onclick', console.log('teste'))
