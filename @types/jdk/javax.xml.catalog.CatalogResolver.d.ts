declare namespace javax {
  namespace xml {
    namespace catalog {

      interface CatalogResolver extends org.xml.sax.EntityResolver, javax.xml.stream.XMLResolver, javax.xml.transform.URIResolver, org.w3c.dom.ls.LSResourceResolver {
        resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
        resolve(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.transform.Source
        resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.io.InputStream
        resolveResource(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): org.w3c.dom.ls.LSInput
        resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.lang.Object
      }

    }
  }
}
