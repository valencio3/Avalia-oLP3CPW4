import React, { Component } from 'react'
import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';
import ListaService from '../../services/ListaService';

import './ListaItem.scss'

export default class ListaItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: this.props.location.state.lista,
            itens: [],
            item: '',
            unidade: ''
            
        };

        this.service = new ListaService();
    }

    async componentDidMount(){
        const itens = await this.service.recuperarTodosItens()
        
        this.setState({itens})
    }

 

    aoAlterarNome = (event) => {
        const itemDescricao = event.target.value;
        const itemFiltrado = this.state.itens.find(
            item => item.descricao === itemDescricao 
        )

        const { unidade } = itemFiltrado
        console.log(unidade)
        this.setState({ item : itemDescricao })
        this.setState ({ unidade})
       
        console.log(itemDescricao)
        console.log(this.state.unidade)
       
    }


    handleSubmit(event) {
       
        event.preventDefault();
      }

    
    render() {
        
        
            const itemlista = this.state.itens.map( item => (
                <option key={item._id} value={item.descricao}>{item.descricao}</option>
            ))
         

        return (
          <div className="conteiner">
            <Menu
              logo={paginaAnterior}
              paginaAnterior="/"
              titulo="Lista de Compras"
            />

            <div>
              <form  onSubmit={this.handleSubmit}>
                <span id="item">Item</span>

                <select 
                   defaultValue='DEFAULT'
                   value={this.state.item.descricao}
                   onChange={this.aoAlterarNome} >
                    <option  
                     disabled  
                     hidden 
                     value="DEFAULT" >Selecione um item</option>
                    {itemlista}
                </select>
                <div>
                <span id="item"> Quantidade </span>
                <input
                 
                 value={this.defaultValue}
                 type="number"
                 name="quantidade"
                 min="1"
                 id="quantidade"
               />
               <span >{this.state.unidade}</span>
                </div>
               
                <input id="botao" type="submit" value="Adicionar" />

              </form>
            </div>
           
            <div>
              <h1>{this.state.lista.nome}</h1>

              icone quantidade descricação remover
            </div>

          </div>
        );
    }
}
