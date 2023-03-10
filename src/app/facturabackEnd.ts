export interface FacturaBackEnd {
  infoTributaria: {
    ambiente: string;
    tipoEmision: string;
    razonSocial: string;
    nombreComercial: string;
    ruc: string;
    claveAcceso: string;
    codDoc: string;
    estab: string;
    ptoEmi: string;
    secuencial: string;
    dirMatriz: string;
  };
  infoFactura: {
    fechaEmision: string;
    dirEstablecimiento: string;
    contribuyenteEspecial: string;

    obligadoContabilidad: string;

    tipoIdentificacionComprador: string;

    guiaRemision: string;

    razonSocialComprador: string;

    identificacionComprador: string;

    direccionComprador: string;

    totalSinImpuestos: string;

    totalDescuento: string;

    totalConImpuestos: {
      totalImpuesto: [
        {
          codigo: string;

          codigoPorcentaje: string;

          baseImponible: string;

          valor: string;
        },
        {
          codigo: string;

          codigoPorcentaje: string;

          descuentoAdicional: string;

          baseImponible: string;

          valor: string;
        }
      ];
    };
    propina: string;

    importeTotal: string;

    moneda: string;

    pagos: {
      pago: [
        {
          formaPago: string;

          total: string;

          plazo: string;

          unidadTiempo: string;
        },
        {
          formaPago: string;

          total: string;

          plazo: string;

          unidadTiempo: string;
        }
      ];
    };
    valorRetIva: string;

    valorRetRenta: string;
  };
  detalles: {
    detalle: detalle[];
  };
  infoAdicional: {
    campoAdicional: [
      {
        nombre: string;

        valor: string;
      },
      {
        nombre: string;

        valor: string;
      }
    ];
  };
}

interface detalle {
  codigoPrincipal: string;

  codigoAuxiliar: string;

  descripcion: string;

  unidadMedida: string;

  cantidad: string;

  precioUnitario: string;

  descuento: string;

  precioTotalSinImpuesto: string;

  detallesAdicionales: {
    detAdicional: detalleAdicional[];
  };
  impuestos: {
    impuesto: impuseto[];
  };
}
interface detalleAdicional {
  nombre: string;
  valor: string;
}
interface impuseto {
  codigo: string;

  codigoPorcentaje: string;

  tarifa: string;

  baseImponible: string;

  valor: string;
}
