export interface FacturaJSON {
  _declaration: {
    _attributes: {
      version: string;
      encoding: string;
    };
  };
  factura: factura;
}

export interface factura {
  _attributes: {
    id: string;
    version: string;
  };
  infoTributaria: infoTributaria;
  infoFactura: infoFactura;
  detalles: {
    detalle: detalle[];
  };
  reembolsos: {
    reembolsoDetalle: reembolsoDetalle[];
  };
  retenciones: {
    retencion: retencion[];
  };
  tipoNegociable: {
    correo: {
      _text: string;
    };
  };
  maquinaFiscal: {
    marca: {
      _text: string;
    };
    modelo: {
      _text: string;
    };
    serie: {
      _text: string;
    };
  };
  infoAdicional: {
    campoAdicional: campoAdicional[];
  };
}

export interface infoTributaria {
  ambiente: {
    _text: string;
  };
  tipoEmision: {
    _text: string;
  };
  razonSocial: {
    _text: string;
  };
  nombreComercial: {
    _text: string;
  };
  ruc: {
    _text: string;
  };
  claveAcceso: {
    _text: string;
  };
  codDoc: {
    _text: string;
  };
  estab: {
    _text: string;
  };
  ptoEmi: {
    _text: string;
  };
  secuencial: {
    _text: string;
  };
  dirMatriz: {
    _text: string;
  };
  agenteRetencion: {
    _text: string;
  };
  contribuyenteRimpe: {
    _text: string;
  };
}
export interface infoFactura {
  fechaEmision: {
    _text: string;
  };
  dirEstablecimiento: {
    _text: string;
  };
  contribuyenteEspecial: {
    _text: string;
  };
  obligadoContabilidad: {
    _text: string;
  };
  comercioExterior: {
    _text: string;
  };
  incoTermFactura: {
    _text: string;
  };
  lugarIncoTerm: {
    _text: string;
  };
  paisOrigen: {
    _text: string;
  };
  puertoEmbarque: {
    _text: string;
  };
  puertoDestino: {
    _text: string;
  };
  paisDestino: {
    _text: string;
  };
  paisAdquisicion: {
    _text: string;
  };
  tipoIdentificacionComprador: {
    _text: string;
  };
  guiaRemision: {
    _text: string;
  };
  razonSocialComprador: {
    _text: string;
  };
  identificacionComprador: {
    _text: string;
  };
  direccionComprador: {
    _text: string;
  };
  totalSinImpuestos: {
    _text: string;
  };
  totalSubsidio: {
    _text: string;
  };
  incoTermTotalSinImpuestos: {
    _text: string;
  };
  totalDescuento: {
    _text: string;
  };
  codDocReembolso: {
    _text: string;
  };
  totalComprobantesReembolso: {
    _text: string;
  };
  totalBaseImponibleReembolso: {
    _text: string;
  };
  totalImpuestoReembolso: {
    _text: string;
  };
  totalConImpuestos: {
    totalImpuesto: totalImpuesto[];
  };
  compensaciones: {
    compensacion: compensacion[];
  };
  propina: {
    _text: string;
  };
  fleteInternacional: {
    _text: string;
  };
  seguroInternacional: {
    _text: string;
  };
  gastosAduaneros: {
    _text: string;
  };
  gastosTransporteOtros: {
    _text: string;
  };
  importeTotal: {
    _text: string;
  };
  moneda: {
    _text: string;
  };
  placa: {
    _text: string;
  };
  pagos: {
    pago: pago[];
  };
  valorRetIva: {
    _text: string;
  };
  valorRetRenta: {
    _text: string;
  };
}
export interface totalImpuesto {
  codigo: {
    _text: string;
  };
  codigoPorcentaje: {
    _text: string;
  };
  descuentoAdicional: {
    _text: string;
  };
  baseImponible: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  valor: {
    _text: string;
  };
  valorDevolucionIva: {
    _text: string;
  };
}
export interface compensacion {
  codigo: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  valor: {
    _text: string;
  };
}
export interface pago {
  formaPago: {
    _text: string;
  };
  total: {
    _text: string;
  };
  plazo: {
    _text: string;
  };
  unidadTiempo: {
    _text: string;
  };
}
export interface detalle {
  codigoPrincipal: {
    _text: string;
  };
  codigoAuxiliar: {
    _text: string;
  };
  descripcion: {
    _text: string;
  };
  unidadMedida: {
    _text: string;
  };
  cantidad: {
    _text: string;
  };
  precioUnitario: {
    _text: string;
  };
  precioSinSubsidio: {
    _text: string;
  };
  descuento: {
    _text: string;
  };
  precioTotalSinImpuesto: {
    _text: string;
  };
  detallesAdicionales: {
    detAdicional: detAdicional[];
  };
  impuestos: {
    impuesto: impuesto[];
  };
}
export interface detAdicional {
  _attributes: {
    nombre: string;
    valor: string;
  };
}
export interface impuesto {
  codigo: {
    _text: string;
  };
  codigoPorcentaje: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  baseImponible: {
    _text: string;
  };
  valor: {
    _text: string;
  };
}
export interface reembolsoDetalle {
  tipoIdentificacionProveedorReembolso: {
    _text: string;
  };
  identificacionProveedorReembolso: {
    _text: string;
  };
  codPaisPagoProveedorReembolso: {
    _text: string;
  };
  tipoProveedorReembolso: {
    _text: string;
  };
  codDocReembolso: {
    _text: string;
  };
  estabDocReembolso: {
    _text: string;
  };
  ptoEmiDocReembolso: {
    _text: string;
  };
  secuencialDocReembolso: {
    _text: string;
  };
  fechaEmisionDocReembolso: {
    _text: string;
  };
  numeroautorizacionDocReemb: {
    _text: string;
  };
  detalleImpuestos: {
    detalleImpuesto: detalleImpuesto[];
  };
  compensacionesReembolso: {
    compensacionReembolso: compensacionReembolso[];
  };
}
export interface detalleImpuesto {
  codigo: {
    _text: string;
  };
  codigoPorcentaje: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  baseImponibleReembolso: {
    _text: string;
  };
  impuestoReembolso: {
    _text: string;
  };
}
export interface compensacionReembolso {
  codigo: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  valor: {
    _text: string;
  };
}
export interface retencion {
  codigo: {
    _text: string;
  };
  codigoPorcentaje: {
    _text: string;
  };
  tarifa: {
    _text: string;
  };
  valor: {
    _text: string;
  };
}
export interface campoAdicional {
  _attributes: {
    nombre: string;
  };
  _text: string;
}
