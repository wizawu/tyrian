declare namespace javax {
  namespace xml {
    namespace transform {
      namespace sax {

        class SAXSource implements javax.xml.transform.Source {
          public static readonly FEATURE: java.lang.String
          public constructor()
          public constructor(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource)
          public constructor(arg0: org.xml.sax.InputSource)
          public setXMLReader(arg0: org.xml.sax.XMLReader): void
          public getXMLReader(): org.xml.sax.XMLReader
          public setInputSource(arg0: org.xml.sax.InputSource): void
          public getInputSource(): org.xml.sax.InputSource
          public setSystemId(arg0: java.lang.String): void
          public getSystemId(): java.lang.String
          public static sourceToInputSource(arg0: javax.xml.transform.Source): org.xml.sax.InputSource
          public isEmpty(): boolean
        }

      }
    }
  }
}
