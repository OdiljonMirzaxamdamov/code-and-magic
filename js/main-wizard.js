'use strict';

(function () {
    // Получение случайного элемента из массива
    var getRandomElement = function (array) {
        var randomElementIndex = Math.floor(Math.random() * array.length);
        return array[randomElementIndex];
    };

    var wizard = {

        onCoatChange: function (color) {
            return color;
        },

        onEyesChange: function (color) {
            return color;
        },
    };


    // Редактирование цвета плаща персонажа.
    // При нажатии на персонажа, заливка элемента,
    // соответствующего плащу персонажа меняется
    // с помощью CSS-свойства SVG-элементов fill.
    // Цвет будет выбираться из заранее определенного
    // набора цветов
    var wizardElement = document.querySelector('.setup-wizard');
    var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
    var wizardCoatColors = [
        'rgb(146, 100, 161)',
        'rgb(215, 210, 55)',
        'rgb(241, 43, 107)',
        'rgb(101, 137, 164)',
        'rgb(0, 0, 0)',
        'rgb(215, 210, 55)',
        'rgb(56, 159, 117)',
        'rgb(241, 43, 107)'
    ];

    wizardCoatElement.addEventListener('click', function () {
        var newColor = getRandomElement(wizardCoatColors);
        wizardCoatElement.style.fill = newColor;
        wizard.onCoatChange(newColor);
    });

    var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
    var wizardEyesColors = [
        'red',
        'orange',
        'yellow',
        'green',
        'lightblue',
        'blue',
        'purple'
    ];

    wizardEyesElement.addEventListener('click', function () {
        var newColor = getRandomElement(wizardEyesColors);
        wizardEyesElement.style.fill = newColor;
        wizard.onEyesChange(newColor);
    });

    window.wizard = wizard;
})();




/*
//Работа над внешним видом и отправкой данных на сервер 4-лекция(2-часть)
//Переменны для смены цветов файербола-глаз-плаща у волшебника
(function () {
    var setupPlayer = document.querySelector('.setup-player');
    var setupWizard = document.querySelector('.setup-wizard');
    var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
    var wizardEyes = document.querySelector('.wizard-eyes');
    var wizardCoat = document.querySelector('.wizard-coat');
    var dataWizards = {
        names: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
        coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        eyesColor: ['black', 'red', 'blue', 'yellow', 'green'],
        fireballColor: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848', 'black'],
    };


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

 */
