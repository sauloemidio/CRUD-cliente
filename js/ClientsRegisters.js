export class ClientsRegisters {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    // this.entries = [
    //   {
    //     name: 'Joao',
    //     email: 'joao@joao.com.br',
    //     celular: '99999999',
    //     cep: '3668000'
    //   },
    //   {
    //     name: 'ste',
    //     email: 'joao@joao.com.br',
    //     celular: '99999999',
    //     cep: '3668000'
    //   }
    // ]

    // this.entries = JSON.parse(`[{
    //   "name": "ste",
    //   "email": "joao@joao.com.br",
    //   "celular": "99999999",
    //   "cep": "3668000"
    // }]`)

    this.entries = JSON.parse(localStorage.getItem('dbClient')) || []
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
    this.update()
  }

  update() {
    this.removeAllTr()

    this.entries.forEach(client => {
      const row = this.createRow()

      row.querySelector('.name').textContent = client.name
      row.querySelector('.email').textContent = client.email
      row.querySelector('.celular').textContent = client.celular
      row.querySelector('.cep').textContent = client.cep
      row.querySelector('#btnRemove').onclick = () => {
        const isOk = confirm(`Tem certeza que deseja deletar ${client.name}?`)
        if (isOk) {
          this.delete(client)
        }
      }
      this.tbody.append(row)
    })
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
