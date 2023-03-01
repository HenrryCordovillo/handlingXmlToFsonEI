import { Component } from '@angular/core';
import * as xmlVIjson from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected xmlString: string = '';

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
      this.xmlString = req.responseText;
      this.parseXmlToJson(this.xmlString);
    }
  }

  parseXmlToJson(xml: string) {
    let parseXML = JSON.parse(
      xmlVIjson.xml2json(xml, { compact: true, spaces: 2 })
    );
    console.log(parseXML);
    this.parseJsToXml(parseXML);
  }

  parseJsToXml(json: any) {
    let xml = xmlVIjson.js2xml(json, {
      compact: true,
      ignoreComment: true,
      spaces: 2,
    });
    console.log(xml);
  }
}
