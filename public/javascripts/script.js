document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!');
  },
  false
);

//tout le formulaire est affiché, aller chercher les éléments HTML
const createAccountForm = document.querySelector('#createAccountForm');
//aller chercher les éléments html
const userForm = document.querySelector('#user-form');
const hostForm = document.querySelector('#host-form');
const visitorOption = document.querySelector('#visitor-option');
const hostOption = document.querySelector('#host-option');
const profileSelection = document.querySelector('#profileSelection');

//option: au début de la partie host est caché

//lié le selected au changement du form

function changeForm() {
  if (profileSelection.selectedIndex === 1) {
    //si l'option index1 (visiteur) est séléctionnée, supprimer la partie host du questionnaire
    visitorOption.setAttribute('selected', 'selected');
    hostOption.removeAttribute('selected');
    createAccountForm.removeChild(hostForm);
  } else {
    //si l'option visiteur n'est pas séléctionnée
    visitorOption.removeAttribute('selected');
    hostOption.setAttribute('selected', 'selected');
    createAccountForm.appendChild(hostForm);
  }
  console.log('changed');
}
//vérifier que les champs required fonctionnent en formulaire restreint

//modifier le formulaire selon l'option séléctionnée (setTimeout pour que s'active une fois que variables liées)
profileSelection.addEventListener('change', changeForm);