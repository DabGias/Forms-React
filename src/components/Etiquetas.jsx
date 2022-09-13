import { useState } from "react"
import {DivEtiqueta} from "../styled"

function Etiquetas() {
    const [cliente, setCliente] = useState({"nome" : "", "email" : "", "cpf" : ""})
    const [listaClientes, setListaClientes] = useState([])

    function cadCliente(e) {
        setCliente({...cliente, [e.target.name] : e.target.value})
    }

    function inserirCliente(e) {
        e.preventDefault()
        setListaClientes([...listaClientes, cliente])
    }

    return(
        <DivEtiqueta>
            <form onSubmit={inserirCliente}>
                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <label>Nome: 
                        <input type="text" name="nome" onChange={cadCliente} value={cliente.nome}/>
                    </label>

                    <label>E-mail: 
                        <input type="email" name="email" onChange={cadCliente} value={cliente.email}/>
                    </label>

                    <label>CPF: 
                        <input type="text" name="cpf" onChange={cadCliente} value={cliente.cpf}/>
                    </label>

                    <button type="submit">Criar</button>
                </fieldset>
            </form>
            <div className="painel">
                {
                    listaClientes.map((cli, index) => 
                        <div className="etiqueta" key={(index)}>
                            <p>Nome: {cli.nome}</p>
                            <p>E-mail: {cli.email}</p>
                            <p>CPF: {cli.cpf}</p>
                        </div>
                    )
                }
            </div>
        </DivEtiqueta>
    )
}

export default Etiquetas
