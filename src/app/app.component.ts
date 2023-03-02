import { Component } from '@angular/core';
import * as xmlVIjson from 'xml-js';
import { FacturaJSON } from './factura-json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected xmlOrigen: string = '';
  protected xmlTransformado: string = '';
  protected factura: Partial<FacturaJSON> = {};

  ngOnInit(): void {
    this.getXML();
  }

  getXML() {
    let req = new XMLHttpRequest();
    req.open(
      'GET',
      '/assets/factura/facturaV1.0.0-generalSinfirmar.xml',
      false
    );
    req.send(null);
    if (req.status == 200) {
      this.xmlOrigen = req.responseText;
      this.parseXmlToJson(this.xmlOrigen);
    }
  }

  parseXmlToJson(xml: string) {
    let factura: FacturaJSON = JSON.parse(
      xmlVIjson.xml2json(xml, { compact: true, spaces: 2 })
    );
    console.log(factura);

    this.factura = factura;
    this.cambiarValores(factura);
  }

  cambiarValores(facturaJson: FacturaJSON) {
    facturaJson.factura.infoTributaria.razonSocial._text = 'nueva razon social';
    this.parseJsToXml(facturaJson);
  }

  parseJsToXml(facturaJson: Partial<FacturaJSON>) {
    this.xmlTransformado = xmlVIjson.js2xml(facturaJson, {
      compact: true,
      ignoreComment: true,
      spaces: 2,
    });
  }
}
