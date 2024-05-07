export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open: function(){
    Modal.wrapper.classList.add('open')
  },

  close: function(){
    Modal.wrapper.classList.remove('open')
  }
}

// Pegando o botão close
Modal.buttonClose.onclick = function() {
  Modal.close()
}

// Adicionando evento e função para fechar o 'modal' pressionando 'esc'
window.addEventListener('keydown', handleKeydown)

function handleKeydown (event) {
  if (event.key == 'Escape') {
    Modal.close()
  }
}

