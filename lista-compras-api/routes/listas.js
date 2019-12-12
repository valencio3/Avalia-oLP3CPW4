const express = require('express');
const listaCtrl = require('../controllers/ListaController');

/**
 * Cria o roteador dos web services
 * relacionados a Lista. Por meio do
 * roteador será possível definir os
 * nossos web services.
 */
const router = express.Router();

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/', listaCtrl.recuperarListas);

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: POST
 */
router.post('/', listaCtrl.salvar);

/**
 * Rota para o serviço: /listas/:id
 */

 router.put('/:id', listaCtrl.atualizar)

 /**
  * Rota para o servico: /listas/:id
  * Verbo HTTP: DELETE
  */

  router.delete('/:id',listaCtrl.remover)
/**
 * Rota para o serviço: /listas/itens
 * Verbo HTTP: GET
 */
//router.get('/itens', listaCtrl.recuperarItensPorDescricao);
router.get('/itens', listaCtrl.recuperarItens);

router.get('/todositens', listaCtrl.recuperarTodosItens);

module.exports = router;