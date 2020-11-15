var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json(presentation);
});

var presentation = `
<section class="main">
      <h1>Me-sida JSramverk</h1>
      <div class="container">
        <div class="dubbel-slot" style="verticalAlign: top">
        <h2>Lite om mig</h2>
          <p>
            Jag heter Andreas Eriksson och är 26 år gammal. Uppvuxen i en mindre ort precis utanför Borås och bor numera i Borås tätort.
            Idag jobbar jag med web content på diverse sätt på marknadsavdelningen på Cellbes. Har jobbat på Cellbes i snart 3 år
            Jag studerade på Webbredaktörsprogrammet på Borås Högskola innan jag började jobba på Cellbes men studerade aldrig då
            utblidningen ej riktigt föll mig i smaken. Efter några år på Cellbes med mycket arbete mot vårt webbutvecklings team
            kände jag att webbutveckling är det jag vill göra. Därav studerar jag nu Webbprogrammeringsprogrammet på
            Blekinge Tekniska Högskola.
          </p>
          <p>
            På min fritid tycker jag framförallt om att umgås med vänner, träna och "sporta". Jag spelar fotboll i ett lag i division
            6 sedan 3 år tillbaka. Spelar jag även mycket golf, har tidigare gått golfgymnasium så golfen har alltid varit
            en stor del av mitt liv. Sen kan det även bli lite paddeltennis, squash, badminton eller volleyboll när tillfälle ges.
            Givitvis klagar man aldrig på att chilla i soffan en regnig dag och maniskt plöja avsnitt efter avsnitt av en serie.
          </p>
          </div>
          <div class="dubbel-slot" style="verticalAlign: top">
        <img src=medium_me_image.jpg />
        </div>
      </div>
    </section>`;

module.exports = router;