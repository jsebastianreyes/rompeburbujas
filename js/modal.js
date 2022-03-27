const $setting = document.querySelector('#setting')
const $btnClose = document.querySelectorAll('.close')
const $modal = document.querySelectorAll('.modal')
export const $modalSpeed = document.querySelector('#modal-velocidad')


$btnClose.forEach(btnClose =>{
  btnClose.addEventListener('click', closeModal)
})

$setting.addEventListener('click', settingSpeed)

function closeModal(){
  $modal.forEach(modal => {
      modal.close()
  })
}

function settingSpeed(){
  $modalSpeed.showModal();
}