'use strict';

//Массивы для создания персонажей по template
var dataWizards = {
  names: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
  fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
};


//Работа над template 3-лекция
//Контейнер клиентского динамического контента
//Тут создаем повторяющихся элементы по шаблону template
(function () {
  var wizards = [
    {
      name: window.util.arrayRandElement(dataWizards.names) + ' ' + window.util.arrayRandElement(dataWizards.secondNames),
      coatColor: window.util.arrayRandElement(dataWizards.coatColor),
      eyesColor: window.util.arrayRandElement(dataWizards.eyesColor),
    },
    {
      name: window.util.arrayRandElement(dataWizards.names) + ' ' + window.util.arrayRandElement(dataWizards.secondNames),
      coatColor: window.util.arrayRandElement(dataWizards.coatColor),
      eyesColor: window.util.arrayRandElement(dataWizards.eyesColor),
    },
    {
      name: window.util.arrayRandElement(dataWizards.names) + ' ' + window.util.arrayRandElement(dataWizards.secondNames),
      coatColor: window.util.arrayRandElement(dataWizards.coatColor),
      eyesColor: window.util.arrayRandElement(dataWizards.eyesColor),
    },
    {
      name: window.util.arrayRandElement(dataWizards.names) + ' ' + window.util.arrayRandElement(dataWizards.secondNames),
      coatColor: window.util.arrayRandElement(dataWizards.coatColor),
      eyesColor: window.util.arrayRandElement(dataWizards.eyesColor),
    },
  ];

  //Присваиваем конкретные значения к элементам из базы данных
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  //Собираем все элементы в fragment, а потом уже передадим в DOM,
  //таким образом мы минимизируем перерисовку каждого элемента по отдельности
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
})();



//Работа над внешним видом и отправкой данных на сервер 4-лекция(2-часть)
//Переменны для смены цветов файербола-глаз-плаща у волшебника
(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardCoat = document.querySelector('.wizard-coat');

  //функции для смены цветов файербола-глаз-плаща у волшебника
  function fireballColorChange() {
    var fireballColor = window.util.arrayRandElement(dataWizards.fireballColor);
    setupPlayer.querySelector('.setup-fireball-wrap').style.background = fireballColor;
    setupFireballWrap.querySelector('.setup-fireball-input').value = fireballColor;
  };

  function changeColor (dataWizardsColor, wizardClass, classInput) {
    var colorElement = window.util.arrayRandElement(dataWizardsColor)
    setupWizard.querySelector(wizardClass).style.fill = colorElement;
    setupPlayer.querySelector(classInput).value = colorElement;
  };

  //Код исполнения для смены цветов файербола-глаз-плаща у волшебника
  setupFireballWrap.addEventListener('click', function () {
    fireballColorChange();
  });

  wizardEyes.addEventListener('click', function () {
    changeColor(dataWizards.eyesColor, '.wizard-eyes', '.wizard-eyes-input');
  });

  wizardCoat.addEventListener('click', function () {
    changeColor(dataWizards.coatColor, '.wizard-coat', '.wizard-coat-input');
  });
})();










































