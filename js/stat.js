'use strict';

//Окно статистики и результатов
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var TEXT_WIDTH = 50;
  var BAR_HEIGHT = 140;
  var BAR_WIDTH = 40;
  var TIMES_HEIGHT = 40;
  var MARGIN = 50;

  //функция для создания облако
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };


  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); //облако с тёмным фоном
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); //облако с белым фоном

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 125, 40);
    ctx.fillText('Список результатов:', 125, 60);


    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + MARGIN) * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + MARGIN) * i, CLOUD_HEIGHT - TIMES_HEIGHT - ((BAR_HEIGHT / (maxTime / 10)) * (times[i] / 10)));

      var randomSaturation = Math.floor(Math.random() * 100);
      var hslBlueColor = 'hsl(240, ' + randomSaturation + '%, 50%)'; // 240 - синий оттенок в модели HSL
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = hslBlueColor;
      }
      ctx.fillRect(CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + MARGIN) * i, CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    }
  };
})();



