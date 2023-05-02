import { database } from "@/services/firebase"
import { FormEvent, useEffect, useState } from "react"

type Contato ={
  chave: string,
  nome: string,
  email: string,
  telefone: string,
  observacoes: string
}
export default function Home() {

  const [ nome,setNome] = useState('')
  const [ email,setEmail] = useState('')
  const [ telefone,setTelefone] = useState('')
  const [ observacoes,setObservacoes] = useState('')

  const [contatos, setContatos] = useState<Contato[]>()

  const [busca, setBusca] = useState<Contato[]>()

  const [estaBuscando, setEstaBuscando] = useState(false)

  useEffect(() =>{
    const RefContatos = database.ref('contatos')

    RefContatos.on('value', resultado =>{
      const resultadoContatos = Object.entries<Contato>(resultado.val() ?? {}).map(([chave,valor]) =>{
        return {
          'chave': chave,
          'nome': valor.nome,
          'email': valor.email,
          'telefone': valor.telefone,
          'observacoes': valor.observacoes,
        }
      })
      setContatos(resultadoContatos)
    })
  },[])

  function gravar(event: FormEvent){
    event.preventDefault()
    const ref = database.ref('contatos')

    const dados = {
      nome,
      email,
      telefone,
      observacoes,
    }

    ref.push(dados)
    setNome('')
    setEmail('')
    setTelefone('')
    setObservacoes('')
  }

  function buscar(event: FormEvent){
    const palavra = event.target.value
    if(palavra.length > 0){
      setEstaBuscando(true)
      const dados = new Array
  
      contatos?.map(contato => {
        const regra = new RegExp(event.target.value, "gi")
        if(regra.test(contato.nome)){
          dados.push(contato)
        }
      })
      setBusca(dados)
    }else{setEstaBuscando(false)}
  }


  return (
    <main className="container">
      <form action="" onSubmit={gravar}>
        <input type="text" value={nome} placeholder='Nome' onChange={event => setNome(event.target.value)} />
        <input type="email" value={email} placeholder='Email' onChange={event => setEmail(event.target.value)} />
        <input type="tel" value={telefone} placeholder='telefone' onChange={event => setTelefone(event.target.value)} />
        <textarea placeholder='Observações' value={observacoes} onChange={event => setObservacoes(event.target.value)}></textarea>
        <button>Salvar</button>
      </form>
      <div className="caixacontatos">
        <input type="text" onChange={buscar} placeholder='buscar' />
        {estaBuscando ? 
                    busca?.map(contato => {
                      return(
                        <div key={contato.chave} className="caixaindividual">
                          <div className="boxtitulo">
                            <p className="nometitulo">{contato.nome}</p>
                              <div>
                                <a href="">editar</a>
                                <a href="">excluir</a>
                              </div>
                          </div>
                          <div className="dados">
                            <p>{contato.email}</p>
                            <p>{contato.telefone}</p>
                            <p>{contato.observacoes}</p>
                          </div>
                        </div>
                      )
                  }): contatos?.map(contato => {
            return(
              <div key={contato.chave} className="caixaindividual">
                <div className="boxtitulo">
                  <p className="nometitulo">{contato.nome}</p>
                    <div>
                      <a href="">editar</a>
                      <a href="">excluir</a>
                    </div>
                </div>
                <div className="dados">
                  <p>{contato.email}</p>
                  <p>{contato.telefone}</p>
                  <p>{contato.observacoes}</p>
                </div>
              </div>
            )
        })
      }
      </div>
    </main>
  )
}
