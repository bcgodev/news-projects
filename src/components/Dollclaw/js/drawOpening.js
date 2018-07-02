/* --------------- set canvas size --------------- */
export function setCanvasSize() {
  let w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let wheight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // 扣掉捲軸的寬度
  let wwidth = w - (w - document.getElementById('mainWrapper').offsetWidth);

  // Landscape
  if (wheight / wwidth > 0.75) {
    this.openingwprL.style.width = wwidth * 0.9 + 'px';
    this.openingwprL.style.height = wwidth * 0.9 * 0.75 + 'px';
  } else {
    this.openingwprL.style.width = (wheight * 0.9) / 0.75 + 'px';
    this.openingwprL.style.height = wheight * 0.9 + 'px';
  }

  // Portrait
  this.openingwprP.style.width = wwidth * 0.95 + 'px';
  this.openingwprP.style.height = (wwidth * 0.95) / 0.8 + 'px';
}

/* --------------- draw Opening (Landscape) --------------- */
export function drawOpeningLandscape(that,typekitFont,data) {

  if (that.openingLandscape.getContext) {
    let ctx = that.openingLandscape.getContext('2d'); 

    typekitFont.load().then(
      function() {
        console.log('typekit is available');
        addTextL();
      },
      function() {
        console.log('typekit is not available after waiting 3 seconds');
        addTextL();
      }
    );

    function addTextL() {

      ctx.save();

      ctx.font =
        '700 56px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.fillText(data.price_conch, 320, 572);

      ctx.rotate((1 * Math.PI) / 180);
      ctx.fillText(data.price_waist, 328, 724);

      ctx.restore();

      ctx.save();

      ctx.font =
        '700 50px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.rotate((6 * Math.PI) / 180);
      ctx.fillText(data.popular_city[0], 1138, 454);

      ctx.fillText(data.popular_city[1], 1138, 574);

      ctx.rotate((2 * Math.PI) / 180);
      ctx.fillText(data.popular_city[2], 1150, 650);

      ctx.restore();

      ctx.save();

      ctx.font =
        '700 31px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.rotate(((5.5 * Math.PI) / 180) * -1);
      ctx.fillText(data.date, 558, 530);

      const totalLength = data.total.toString().length;
      const localeString = data.total.toLocaleString('en');   

      switch(totalLength){   

        case 5:
          ctx.font =
          '700 74px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 560, 620);
          break;
          
        case 6:
          ctx.font =
          '700 66px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 555, 620);
          break;  

        default:  
          ctx.font =
          '700 76px "source-han-sans-traditional","微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 580, 620);
      }          

      ctx.restore();
    }
  } else {
    console.log('瀏覽器不支援 canvas');
  }
}

/* --------------- draw Opening (Portrait) --------------- */
export function drawOpeningPortrait(that,typekitFont,data) {
  if (that.openingPortrait.getContext) {
    let ctx = that.openingPortrait.getContext('2d');

    addTextP();

    function addTextP() {
      ctx.save();

      ctx.font =
        '700 56px "微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.fillText(data.price_conch, 300, 372);

      ctx.rotate((1 * Math.PI) / 180);
      ctx.fillText(data.price_waist, 298, 524);

      ctx.restore();

      ctx.save();

      ctx.font =
        '700 50px "微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.rotate((6 * Math.PI) / 180);
      ctx.fillText(data.popular_city[0], 528, 696);

      ctx.fillText(data.popular_city[1], 528, 815);

      ctx.rotate((2 * Math.PI) / 180);
      ctx.fillText(data.popular_city[2], 550, 915);

      ctx.restore();

      ctx.save();

      ctx.font =
        '700 31px "微軟正黑體", "Microsoft JhengHei", sans-serif';
      ctx.fillStyle = '#62485b';
      ctx.rotate(((5.5 * Math.PI) / 180) * -1);
      ctx.fillText(data.date, 528, 350);

      const totalLength = data.total.toString().length;
      const localeString = data.total.toLocaleString('en');   

      switch(totalLength){   

        case 5:
          ctx.font =
          '700 74px "微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 530, 440);
          break;
          
        case 6:
          ctx.font =
          '700 66px "微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 520, 440);
          break;  

        default:  
          ctx.font =
          '700 76px "微軟正黑體", "Microsoft JhengHei", sans-serif';
          ctx.rotate((0.1 * Math.PI) / 180);
          ctx.fillText(localeString, 550, 440);
      }    

      ctx.restore();
    }
  } else {
    console.log('瀏覽器不支援 canvas');
  }
}
