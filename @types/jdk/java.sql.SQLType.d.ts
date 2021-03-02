declare namespace java {
  namespace sql {

    interface SQLType {
      getName(): java.lang.String
      getVendor(): java.lang.String
      getVendorTypeNumber(): java.lang.Integer
    }

  }
}
