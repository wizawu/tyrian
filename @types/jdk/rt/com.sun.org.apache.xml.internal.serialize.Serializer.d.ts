declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            interface Serializer {
                                setOutputByteStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                setOutputCharStream(arg0: java.io.Writer): void
                                setOutputFormat(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): void
                                asDocumentHandler(): org.xml.sax.DocumentHandler
                                asContentHandler(): org.xml.sax.ContentHandler
                                asDOMSerializer(): com.sun.org.apache.xml.internal.serialize.DOMSerializer
                            }
                        }
                    }
                }
            }
        }
    }
}