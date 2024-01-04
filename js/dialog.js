'use strict';

//Работа над доступностью 4-лекция(1-часть)
//Переменные для открытия и закрытия попап
(function () {
    var setup = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');

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
        window.util.isEnterEvent(evt, popupOpen);
    });

    setupClose.addEventListener('click', function () {
        popupClose();
    });

    setupClose.addEventListener('keydown', function (evt) {
        window.util.isEnterEvent(evt, popupClose);
    });

    document.addEventListener('keydown', function (evt) {
        window.util.isEscEvent(evt, popupClose);
    });
})();



//Перемещение диалогового окна
(function () {
    var setupDialogElement = document.querySelector('.setup');
    var dialogHandle = setupDialogElement.querySelector('.upload');

    dialogHandle.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY,
        };

        var dragged = false;

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            dragged = true;

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY,
            }

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY,
            };

            setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
            setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                var onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogHandle.removeEventListener('click', onClickPreventDefault);
                };
                dialogHandle.addEventListener('click', onClickPreventDefault);
            };
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
})();
