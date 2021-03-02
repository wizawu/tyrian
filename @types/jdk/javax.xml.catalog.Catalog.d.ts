declare namespace javax {
  namespace xml {
    namespace catalog {

      interface Catalog {
        matchSystem(arg0: java.lang.String | string): java.lang.String
        matchPublic(arg0: java.lang.String | string): java.lang.String
        matchURI(arg0: java.lang.String | string): java.lang.String
        catalogs(): java.util.stream.Stream<javax.xml.catalog.Catalog>
      }

    }
  }
}
