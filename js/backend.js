'use strict';


(function() {
    window.backend = {
        load: function(onLoad, onError) {
            var URl = 'https://24.javascript.pages.academy/code-and-magick/data';
            var xhr = new XMLHttpRequest();
            xhr.responseType = "json";

            xhr.addEventListener("load", function() {
                if (xhr.status === 200) {
                    onLoad(xhr.response);
                } else {
                    onError("Неизвестный статус: " + xhr.status + " " + xhr.statusText);
                }
            });
            xhr.addEventListener("error", function() {
                onError("произошла ошибка соединения");
            });
            xhr.addEventListener("timeout", function() {
                onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
            });

            xhr.open("GET", URl);
            xhr.send();
        },
        save: function(data, onLoad, onError) {
            var URL = 'https://24.javascript.pages.academy/code-and-magick';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.responseURL = 'https://24.javascript.pages.academy/code-and-magick';

            xhr.addEventListener('load', function() {
                if (xhr.response === 200) {
                    onLoad(xhr.response);
                } else {
                    onError("Неизвестный статус: " + xhr.status + " " + xhr.statusText);
                }
            });

            xhr.addEventListener("error", function() {
                onError("произошла ошибка соединения");
            });
            xhr.addEventListener("timeout", function() {
                onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
            });

            xhr.timeout = 10000; // 10s

            xhr.open('POST', URL);
            xhr.send(data);
        }
    };
})();


// Файл setup.js при использовании сети

(function () {
    var userDialog = document.querySelector('.setup');
    userDialog.querySelector('.setup-similar').classList.remove('hidden');



    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

        return wizardElement;
    };

    var onLoad = function (wizards) {

        var randomWizards = window.util.getRandomSubset(wizards, 4);
        var fragment = document.createDocumentFragment();

        for(var i = 0; i < randomWizards.length; i++) {
            fragment.appendChild(renderWizard(randomWizards[i]));
        }

        similarListElement.appendChild(fragment);
        // userDialog.querySelector(".setup-similar").classList.remove("hidden");
    };

    var onError = function(errorMessage) {
        var node = document.createElement("div");
        node.style = "z-index: 100; margin: 0 auto; text-align: center; backhround-color: red;";
        node.style.position = "absolute";
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = "30px";

        node.textContent = errorMessage;
        document.body.insertAdjacentElement("afterbegin", node);
    };


    var onLoadSave = function(response)	{
        userDialog.classList.add("hidden");
    };

    // При отправке формы воспользуется функцией upload и отменяется действие формы по умолчанию.
    // Диалог закроется, как только данные будут успешно отправлены.
    var form = document.querySelector(".setup-wizard-form");
    form.addEventListener("submit",  function(evt) {
        evt.preventDefault();
        window.backend.save(new FormData(form), onLoadSave, onError);
    });



    window.backend.load(onLoad, onError);

})();


// Файл load.js
// (function () {
//     // var URL = 'https://js.dump.academy/code-and-magick/data';
//     var URL = 'https://24.javascript.pages.academy/code-and-magick/data';
//
//     window.load = function (onSuccess, onError) {
//         var xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//
//         xhr.addEventListener('load', function () {
//             if (xhr.status === 200) {
//                 onSuccess(xhr.response);
//             } else {
//                 onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
//             }
//         });
//         xhr.addEventListener('error', function () {
//             onError('Произошла ошибка соединения');
//         });
//         xhr.addEventListener('timeout', function () {
//             onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
//         });
//
//         xhr.timeout = 10000; // 10s
//
//         xhr.open('GET', URL);
//         xhr.send();
//     };
// })();
//
//
// // Файл upload.js
// (function () {
//     // var URL = 'https://js.dump.academy/code-and-magick';
//     var URL = 'https://24.javascript.pages.academy/code-and-magick';
//
//     window.upload = function (data, onSuccess) {
//         var xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//
//         xhr.addEventListener('load', function () {
//             onSuccess(xhr.response);
//         });
//
//         xhr.open('POST', URL);
//         xhr.send(data);
//     };
// })();




// Файл setup.js при использовании сети
//
// (function () {
//   var userDialog = document.querySelector('.setup');
//   userDialog.classList.remove('hidden');
//
//   var similarListElement = userDialog.querySelector('.setup-similar-list');
//   var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
//
//   var renderWizard = function (wizard) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);
//
//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//     wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
//
//     return wizardElement;
//   };
//
//   var successHandler = function (wizards) {
//     var fragment = document.createDocumentFragment();
//
//     for (var i = 0; i < 4; i++) {
//       fragment.appendChild(renderWizard(wizards[i]));
//     }
//     similarListElement.appendChild(fragment);
//
//
//
//   };
//
//   var errorHandler = function (errorMessage) {
//     var node = document.createElement('div');
//     node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
//     node.style.position = 'absolute';
//     node.style.left = 0;
//     node.style.right = 0;
//     node.style.fontSize = '30px';
//
//     node.textContent = errorMessage;
//     document.body.insertAdjacentElement('afterbegin', node);
//   };
//
//     //При отправке формы воспользуется функцией upload и отменяется действие формы по умолчанию.
//     //Диалог закроется, как только данные будут успешно отправлены.
//     userDialog.querySelector('.setup-similar').classList.remove('hidden');
//     var form = userDialog.querySelector('.setup-wizard-form');
//     form.addEventListener('submit', function (evt) {
//         window.upload(new FormData(form), function (response) {
//             userDialog.classList.add('hidden');
//         });
//         evt.preventDefault();
//     });
//
//   window.load(successHandler, errorHandler);
//
// })();



//Работа над внешним видом и отправкой данных на сервер 4-лекция(2-часть)
//Переменны для смены цветов файербола-глаз-плаща у волшебника
// (function () {
//     var setupPlayer = document.querySelector('.setup-player');
//     var setupWizard = document.querySelector('.setup-wizard');
//     var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
//     var wizardEyes = document.querySelector('.wizard-eyes');
//     var wizardCoat = document.querySelector('.wizard-coat');
//
//     //функции для смены цветов файербола-глаз-плаща у волшебника
//     function fireballColorChange() {
//         var fireballColor = window.util.arrayRandElementBackend(wizard.colorFireball);
//         setupPlayer.querySelector('.setup-fireball-wrap').style.background = fireballColor;
//         setupFireballWrap.querySelector('.setup-fireball-input').value = fireballColor;
//     };
//
//     function changeColor (dataWizardsColor, wizardClass, classInput) {
//         var colorElement = window.util.arrayRandElementBackend(dataWizardsColor)
//         setupWizard.querySelector(wizardClass).style.fill = colorElement;
//         setupPlayer.querySelector(classInput).value = colorElement;
//     };
//
//     //Код исполнения для смены цветов файербола-глаз-плаща у волшебника
//     setupFireballWrap.addEventListener('click', function () {
//         fireballColorChange();
//     });
//
//     wizardEyes.addEventListener('click', function () {
//         changeColor(wizard.colorEyes, '.wizard-eyes', '.wizard-eyes-input');
//     });
//
//     wizardCoat.addEventListener('click', function () {
//         changeColor(wizard.colorCoat, '.wizard-coat', '.wizard-coat-input');
//     });
// })();


