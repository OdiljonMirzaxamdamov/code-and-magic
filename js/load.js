'use strict';

(function () {
    var URL = 'https://24.javascript.htmlacademy.pro/code-and-magick/data';

    window.load = function (url, onSuccess, onError) {
        url = url || URL;
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                onSuccess(xhr.response);
            } else {
                onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
            }
        });
        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });
        xhr.addEventListener('timeout', function () {
            onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 10000; // 10s

        xhr.open('GET', url);
        xhr.send();
    };
})();
