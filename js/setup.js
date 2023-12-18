'use strict';

var dataWizards = {
  names: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var wizards = [
  {
    name: arrayRandElement(dataWizards.names) + ' ' + arrayRandElement(dataWizards.secondNames),
    coatColor: arrayRandElement(dataWizards.coatColor),
    eyesColor: arrayRandElement(dataWizards.eyesColor),
  },
  {
    name: arrayRandElement(dataWizards.names) + ' ' + arrayRandElement(dataWizards.secondNames),
    coatColor: arrayRandElement(dataWizards.coatColor),
    eyesColor: arrayRandElement(dataWizards.eyesColor),
  },
  {
    name: arrayRandElement(dataWizards.names) + ' ' + arrayRandElement(dataWizards.secondNames),
    coatColor: arrayRandElement(dataWizards.coatColor),
    eyesColor: arrayRandElement(dataWizards.eyesColor),
  },
  {
    name: arrayRandElement(dataWizards.names) + ' ' + arrayRandElement(dataWizards.secondNames),
    coatColor: arrayRandElement(dataWizards.coatColor),
    eyesColor: arrayRandElement(dataWizards.eyesColor),
  },
];

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);



//Работа над доступностью 4-лекция
//Переменные для открытия и закрытия попап
var ENTER_KEYCODE = 'Enter';
var ESC_KEYCODE = 'Escape';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');

setup.querySelector('.setup-similar').classList.remove('hidden');

//функции открытия и закрытия попап
function popupOpen() {
  setup.classList.remove('hidden');
}

function popupClose() {
  setup.classList.add('hidden');
}

//Код исполнения открытия и закрытия попап
setupOpen.addEventListener('click', function () {
  popupOpen();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEYCODE) {
    popupOpen();
  }
});

setupClose.addEventListener('click', function () {
  popupClose();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEYCODE) {
    popupClose();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEYCODE) {
    if (setupUserName !== document.activeElement) {
      popupClose();
    }
  }
});


//Переменны для смены цветов файербола-глаз-плаща у волшебника
var setupPlayer = document.querySelector('.setup-player');
var setupWizard = document.querySelector('.setup-wizard');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardCoat = document.querySelector('.wizard-coat');


//функции для смены цветов файербола-глаз-плаща у волшебника
function fireballColorChange() {
  var fireballColorInput = setupPlayer.querySelector('.setup-fireball-wrap').style.background = arrayRandElement(dataWizards.fireballColor);
  setupFireballWrap.querySelector('.setup-fireball-input').value = fireballColorInput;
};

function wizardEyesColorChange() {
  var eyesColorInput = setupWizard.querySelector('.wizard-eyes').style.fill = arrayRandElement(dataWizards.eyesColor);
  setupPlayer.querySelector('.wizard-eyes-input').value = eyesColorInput;
};

function wizardCoatColorChange() {
  var coatColorInput = setupWizard.querySelector('.wizard-coat').style.fill = arrayRandElement(dataWizards.coatColor);
  setupPlayer.querySelector('.wizard-coat-input').value = coatColorInput;
};


//Код исполнения для смены цветов файербола-глаз-плаща у волшебника
setupFireballWrap.addEventListener('click', function () {
  fireballColorChange();
});

wizardEyes.addEventListener('click', function () {
  wizardEyesColorChange();
});

wizardCoat.addEventListener('click', function () {
  wizardCoatColorChange();
});
