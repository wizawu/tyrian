declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            interface Serializer {
                                setOutputStream(arg0: java.io.OutputStream): void
                                getOutputStream(): java.io.OutputStream
                                setWriter(arg0: java.io.Writer): void
                                getWriter(): java.io.Writer
                                setOutputFormat(arg0: java.util.Properties): void
                                getOutputFormat(): java.util.Properties
                                asContentHandler(): org.xml.sax.ContentHandler
                                asDOMSerializer(): com.sun.org.apache.xml.internal.serializer.DOMSerializer
                                reset(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}