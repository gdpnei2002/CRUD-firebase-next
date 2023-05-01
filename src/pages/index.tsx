import { database } from "@/services/firebase"
import { FormEvent, useState } from "react"

export default function Home() {

  const [ nome,setNome] = useState('')
  const [ email,setEmail] = useState('')
  const [ telefone,setTelefone] = useState('')
  const [ observacoes,setObservacoes] = useState('')

  function gravar(event: FormEvent){
    event.preventDefault()
    const ref = database.ref('contatos')

    const dados = {
      nome,
      email,
      telefone,
      observacoes
    }
    ref.push(dados)
  }
  return (
    <main className="container">
      <form action="" onSubmit={gravar}>
        <input type="text" placeholder='Nome' onChange={event => setNome(event.target.value)} />
        <input type="email" placeholder='Email' onChange={event => setEmail(event.target.value)} />
        <input type="tel" placeholder='telefone' onChange={event => setTelefone(event.target.value)} />
        <textarea placeholder='Observações' onChange={event => setObservacoes(event.target.value)}></textarea>
        <button>Salvar</button>
      </form>
      <div className="caixacontatos">
        <input type="text" placeholder='buscar' />
          <div className="caixaindividual">
            <div className="boxtitulo">
              <p className="nometitulo">Carla Gomes Farias</p>
                <div>
                  <a href="">editar</a>
                  <a href="">excluir</a>
                </div>
            </div>
            <div className="dados">
              <p>carla@gmail</p>
              <p>00000</p>
              <p>amiga</p>
            </div>
          </div>
      </div>
    </main>
  )
}
