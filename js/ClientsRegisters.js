export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('dbClient')) || []
  }

  save() {
    localStorage.setItem('dbClient', JSON.stringify(this.entries))
    this.cleanInput()
  }

  edit(client) {
    this.modal.style.display = 'block'
    this.modal.querySelector('#nome').value = client.name
    this.modal.querySelector('#email').value = client.email
    this.modal.querySelector('#celular').value = client.celular
    this.modal.querySelector('#cep').value = client.cep
  }

  delete(client) {
    const filteredEntries = this.entries.filter(
      entry => entry.name !== client.name
    )
    this.entries = filteredEntries
    this.update()
  }
}

export class RegistrationView extends ClientsRegisters {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.modal = this.root.querySelector('#myModal')

    this.root.querySelector('#btnCloseModal').onclick = () => {
      this.modal.style.display = 'none'
    }

    this.root.querySelector('#btnRegisterNewClient').onclick = () => {
      this.modal.style.display = 'block'
      this.focuInput()
    }

    this.root.querySelector('#btnCancelar').onclick = () => {
      this.modal.style.display = 'none'
      this.cleanInput()
    }

    this.modal.querySelector('#btnSalvar').onclick = () => {
      if (this.validInputs()) {
        this.dataClient()
      }
      this.entries = [this.newClient, ...this.entries]
      this.update()
    }

    this.update()
  }

  dataClient() {
    this.newClient = {
      name: this.modal.querySelector('#nome').value,
      email: this.modal.querySelector('#email').value,
      celular: this.modal.querySelector('#celular').value,
      cep: this.modal.querySelector('#cep').value
    }
  }

  validInputs() {
    return this.root.querySelector('#form').reportValidity()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(client => {
      if (client.name != undefined) {
        const row = this.createRow()

        row.querySelector('.name').textContent = client.name
        row.querySelector('.email').textContent = client.email
        row.querySelector('.celular').textContent = client.celular
        row.querySelector('.cep').textContent = client.cep
        row.querySelector('#btnEdit').onclick = () => {
          this.edit(client)
        }
        row.querySelector('#btnRemove').onclick = () => {
          const isOk = confirm(`Tem certeza que deseja deletar ${client.name}?`)
          if (isOk) {
            this.delete(client)
          }
        }
        this.tbody.append(row)
      }
    })
    this.save()
  }

  createRow() {
    const tr = document.createElement('tr')
    const content = `<tr>
    <td class="name"></td>
    <td class="email"></td>
    <td class="celular">+</td>
    <td class="cep"></td>
    <td class="colunaAcao">
      <button class="btnGreen" id="btnEdit">Editar</button>
      <button class="btnRed" id="btnRemove">Remover</button>
    </td>
  </tr>`
    tr.innerHTML = content

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    })
  }

  cleanInput() {
    const inputs = this.modal.querySelectorAll('#nome, #email, #celular, #cep')
    inputs.forEach(input => {
      input.value = ''
      this.focuInput()
    })
  }

  focuInput() {
    this.modal.querySelector('#nome').focus()
  }
}
