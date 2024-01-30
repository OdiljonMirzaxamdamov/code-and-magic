'use strict';


(function() {
    window.backend = {
        load: function(onLoad, onError) {
            var URl = 'https://24.javascript.htmlacademy.pro/code-and-magick/data';
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
            var URL = 'https://24.javascript.htmlacademy.pro/code-and-magick';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.responseURL = 'https://24.javascript.htmlacademy.pro/code-and-magick';

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


/*
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

        // var randomWizards = window.util.getRandomSubset(wizards, 4);
        var takeNumber = wizards.length > 4 ? 4 : wizards.length;
        var fragment = document.createDocumentFragment();

        for(var i = 0; i < takeNumber; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }

        similarListElement.appendChild(fragment);
        // userDialog.querySelector(".setup-similar").classList.remove("hidden");
    };

    var getRank = function(wizard) {
        var setupWizard = document.querySelector('.setup-wizard');
        var setupColorCoat = setupWizard.querySelector('.wizard-coat');
        var setupColorEyes = setupWizard.querySelector('.wizard-eyes');
        var rank = 0;

        if(wizard.coatColor === setupColorCoat.style.fill) {
            rank += 2;
        }
        if(wizard.eyesColor === setupColorEyes.style.fill) {
            rank += 1;
        }
        return rank;
    };

    var updateWizards = function() {
        render(wizards.sort(function (left, right) {
            return getRank(right) - getRank(left);
        }));
    };
    updateWizards();

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

*/
