import { RegistrationView } from './ClientsRegisters.js'
new RegistrationView('#app')

const openModal = document
  .getElementById('modal')
  .classList.add('active') /*adiciona active na classe */

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

const closeModal = document
  .getElementById('modal')
  .classList.remove('active') /*remove active na classe */

document.getElementById('modalClose').addEventListener('click', closeModal)
