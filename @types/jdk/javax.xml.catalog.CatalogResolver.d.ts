declare namespace javax {
  namespace xml {
    namespace catalog {

      interface CatalogResolver extends org.xml.sax.EntityResolver, javax.xml.stream.XMLResolver, javax.xml.transform.URIResolver, org.w3c.dom.ls.LSResourceResolver {
        resolveEntity(arg0: java.lang.String, arg1: java.lang.String): org.xml.sax.InputSource
        resolve(arg0: java.lang.String, arg1: java.lang.String): javax.xml.transform.Source
        resolveEntity(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): java.io.InputStream
        resolveResource(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): org.w3c.dom.ls.LSInput
        resolveEntity(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String): java.lang.Object
      }

    }
  }
}
