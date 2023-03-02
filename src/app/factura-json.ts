export interface FacturaJSON {
  _declaration: {
    _attributes: {
      version: string;
      encoding: string;
    };
  };
  factura: {
    _attributes: {
      id: string;
      version: string;
    };
    infoTributaria: infoTributaria;
    infoFactura: {
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
      totalDescuento: {
        _text: string;
      };
      totalConImpuestos: {
        totalImpuesto: [
          {
            codigo: {
              _text: string;
            };
            codigoPorcentaje: {
              _text: string;
            };
            baseImponible: {
              _text: string;
            };
            valor: {
              _text: string;
            };
          },
          {
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
            valor: {
              _text: string;
            };
          }
        ];
      };
      propina: {
        _text: string;
      };
      importeTotal: {
        _text: string;
      };
      moneda: {
        _text: string;
      };
      pagos: {
        pago: [
          {
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
          },
          {
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
        ];
      };
      valorRetIva: {
        _text: string;
      };
      valorRetRenta: {
        _text: string;
      };
    };
    detalles: {
      detalle: [
        {
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
          descuento: {
            _text: string;
          };
          precioTotalSinImpuesto: {
            _text: string;
          };
          detallesAdicionales: {
            detAdicional: [
              {
                _attributes: {
                  nombre: string;
                  valor: string;
                };
              },
              {
                _attributes: {
                  nombre: string;
                  valor: string;
                };
              }
            ];
          };
          impuestos: {
            impuesto: [
              {
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
              },
              {
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
            ];
          };
        },
        {
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
          descuento: {
            _text: string;
          };
          precioTotalSinImpuesto: {
            _text: string;
          };
          detallesAdicionales: {
            detAdicional: [
              {
                _attributes: {
                  nombre: string;
                  valor: string;
                };
              },
              {
                _attributes: {
                  nombre: string;
                  valor: string;
                };
              }
            ];
          };
          impuestos: {
            impuesto: [
              {
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
              },
              {
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
            ];
          };
        }
      ];
    };
    infoAdicional: {
      campoAdicional: [
        {
          _attributes: {
            nombre: string;
          };
          _text: string;
        },
        {
          _attributes: {
            nombre: string;
          };
          _text: string;
        }
      ];
    };
  };
}

interface infoTributaria {
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
}
