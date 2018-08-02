declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class SAXInputSource extends com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource {
                                public constructor()
                                public constructor(arg0: org.xml.sax.InputSource)
                                public constructor(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource)
                                public setXMLReader(arg0: org.xml.sax.XMLReader): void
                                public getXMLReader(): org.xml.sax.XMLReader
                                public setInputSource(arg0: org.xml.sax.InputSource): void
                                public getInputSource(): org.xml.sax.InputSource
                                public setPublicId(arg0: java.lang.String | string): void
                                public setSystemId(arg0: java.lang.String | string): void
                                public setByteStream(arg0: java.io.InputStream): void
                                public setCharacterStream(arg0: java.io.Reader): void
                                public setEncoding(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}