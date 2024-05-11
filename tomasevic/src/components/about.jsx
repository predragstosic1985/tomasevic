import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/2.webp" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>O NAMA</h2>
              <p>TOMAŠEVIĆ
                Nalazimo se na najlepšem delu Jadrana, okruženi mediteranskom vegetacijom.
                Na raspolaganju su besplatan bežični internet i besplatan parking u sklopu smeštaja.
                Nudimo Vam potpuno opremljene apartmane sa terasom, TV-om, klimom, kuhinjom i kupatilom.
                Pored apartamana u ponudi imamo i dvokrevetne sobe. Sve sobe su sa terasom, opremljene klimom, TV-om, frižiderom.
                Objekat nudi vlastiti vrt sa letnjom kuhinjom i priborom za pripremu roštilja.
                Nedaleko od nas nalazi se super-market, kao i restoran koji nudi pansionski nacin ishrane.
                Najlepša plaza Lučice, kao i gradska plaza udaljene su oko 500 metara.
                Takodje, do plaze As moze se doci šetnjom predivnom stazom pored mora, okruženom borovom šumom.
                Veliki broj raznovrsnih ugostiteljskih objekata nalazi se na 5 do 10 minuta hoda od objekta.
                Budva i druga mesta za noćni život, udaljena su 20 do 30 minuta vožnje.
                Nemojte propustiti da posetite lepe znamenitosti u okolini kao sto su ostrvo Katič i Sveta Nedjelja,
                manastir Reževići ili da se provozate do Svetog Stefana (11 km).
                Stara mediteranska kotorska luka, okružena gradskim zidinama, svrstana u svetsku kulturnu baštinu,
                nalazi se na oko 40-ak km od objekta. Najbliži aerodrom je Aerodrom Tivat, udaljen 43 km od našeg smeštaja.
                Autobuska stanica u Petrovcu na 300m i železnicka stanica u Sutomoru na 10km.
                Ukoliko želite da istražujete okolinu ona je idealna za biciklizam, kao i za šetnju.</p>
              <h3>Zbog cega kod nas?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Bežični internet</li>
                    <li>Besplatan parking</li>
                    <li>Vrt sa priborom za pripremu roštilja</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Do Svetog Stefana 11 km</li>
                    <li>Aerodrom Tivat 43 km</li>
                    <li>Autobuska stanica 300m </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
