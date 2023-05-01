

export default function Home() {
  return (
    <main className="container">
      <form action="">
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="tel" placeholder='telefone' />
        <textarea placeholder='Observações'></textarea>
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
