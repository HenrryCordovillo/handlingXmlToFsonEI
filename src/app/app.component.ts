import { Component, OnInit } from '@angular/core';
import * as xmlVIjson from 'xml-js';
import { FacturaJSON } from './factura-json';
import { FacturaBackEnd } from './facturabackEnd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  protected xmlOrigen: string = '';
  protected xmlTransformado: string = '';
  protected facturaBackEnd: FacturaBackEnd = {
    infoTributaria: {
      ambiente: '1',
      tipoEmision: '1',
      razonSocial: 'razon social prueba',
      nombreComercial: 'nombre comercial prueba',
      ruc: '0000000000001',
      claveAcceso: '0000000000000000000000000000000000000000000000000',
      codDoc: '00',
      estab: '000',
      ptoEmi: '000',
      secuencial: '000000000',
      dirMatriz: 'dirMatriz0',
    },
    infoFactura: {
      fechaEmision: '01/01/2003',
      dirEstablecimiento: 'dirEstablecimiento',
      contribuyenteEspecial: 'contribuyente',

      obligadoContabilidad: 'SI',

      tipoIdentificacionComprador: '04',

      guiaRemision: '000-000-000000000',

      razonSocialComprador: 'razonSocialComprador0',

      identificacionComprador: 'identificacionCompra',

      direccionComprador: 'direccionComprador0',

      totalSinImpuestos: '50.00',

      totalDescuento: '0.00',

      totalConImpuestos: {
        totalImpuesto: [
          {
            codigo: '2',

            codigoPorcentaje: '0',

            baseImponible: '50.00',

            valor: '50.00',
          },
          {
            codigo: '2',

            codigoPorcentaje: '0',

            descuentoAdicional: '0.00',

            baseImponible: '50.00',

            valor: '50.00',
          },
        ],
      },
      propina: '50.00',

      importeTotal: '50.00',

      moneda: 'moneda0',

      pagos: {
        pago: [
          {
            formaPago: '01',

            total: '50.00',

            plazo: '50.00',

            unidadTiempo: 'unidadTiem',
          },
          {
            formaPago: '01',

            total: '50.00',

            plazo: '50.00',

            unidadTiempo: 'unidadTiem',
          },
        ],
      },
      valorRetIva: '50.00',

      valorRetRenta: '50.00',
    },
    detalles: {
      detalle: [
        {
          codigoPrincipal: 'codigoPrincipal0',

          codigoAuxiliar: 'codigoAuxiliar0',

          descripcion: 'descripcion0',

          unidadMedida: 'unidadMedida0',

          cantidad: '50.000000',

          precioUnitario: '50.000000',

          descuento: '50.00',

          precioTotalSinImpuesto: '50.00',

          detallesAdicionales: {
            detAdicional: [
              {
                nombre: 'nombre0',
                valor: 'valor0',
              },
              {
                nombre: 'nombre1',
                valor: 'valor1',
              },
            ],
          },
          impuestos: {
            impuesto: [
              {
                codigo: '2',

                codigoPorcentaje: '0',

                tarifa: '49.50',

                baseImponible: '50.00',

                valor: '50.00',
              },
              {
                codigo: '2',

                codigoPorcentaje: '0',

                tarifa: '49.50',

                baseImponible: '50.00',

                valor: '50.00',
              },
            ],
          },
        },
        {
          codigoPrincipal: 'codigoPrincipal1',

          codigoAuxiliar: 'codigoAuxiliar1',

          descripcion: 'descripcion1',

          unidadMedida: 'unidadMedida1',

          cantidad: '50.000000',

          precioUnitario: '50.000000',

          descuento: '50.00',

          precioTotalSinImpuesto: '50.00',

          detallesAdicionales: {
            detAdicional: [
              {
                nombre: 'nombre2',
                valor: 'valor2',
              },
              {
                nombre: 'nombre3',
                valor: 'valor3',
              },
            ],
          },
          impuestos: {
            impuesto: [
              {
                codigo: '2',

                codigoPorcentaje: '0',

                tarifa: '49.50',

                baseImponible: '50.00',

                valor: '50.00',
              },
              {
                codigo: '2',

                codigoPorcentaje: '0',

                tarifa: '49.50',

                baseImponible: '50.00',

                valor: '50.00',
              },
            ],
          },
        },
      ],
    },
    infoAdicional: {
      campoAdicional: [
        {
          nombre: 'nombre4',

          valor: 'campoAdicional0',
        },
        {
          nombre: 'nombre4',

          valor: 'campoAdicional1',
        },
      ],
    },
  };

  protected facturaJSON: Partial<FacturaJSON> = {};

  constructor() {}

  ngOnInit(): void {
    // this.getXML();

    this.parserJSON(this.facturaBackEnd);

    this.parseJsToXml(this.facturaJSON);
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
    this.facturaJSON = factura;
    this.cambiarValores(factura);
  }

  cambiarValores(facturaJson: FacturaJSON) {
    this.parseJsToXml(facturaJson);
  }

  parseJsToXml(facturaJson: Partial<FacturaJSON>) {
    this.xmlTransformado = xmlVIjson.js2xml(facturaJson, {
      compact: true,
      ignoreComment: true,
      spaces: 2,
    });
  }

  parserJSON(factura: FacturaBackEnd) {
    let facturaArmadaJSON: Partial<FacturaJSON> = {
      _declaration: {
        _attributes: {
          version: '1.0',
          encoding: 'UTF-8',
        },
      },
      factura: {
        _attributes: {
          id: '1.0',
          version: 'UTF-8',
        },
      },
    };
  }
}
