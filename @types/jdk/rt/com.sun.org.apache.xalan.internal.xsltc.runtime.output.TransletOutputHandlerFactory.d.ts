declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace runtime {
                                namespace output {
                                    class TransletOutputHandlerFactory {
                                        public static STREAM: int
                                        public static SAX: int
                                        public static DOM: int
                                        public static STAX: int
                                        public static newInstance(): com.sun.org.apache.xalan.internal.xsltc.runtime.output.TransletOutputHandlerFactory
                                        public static newInstance(arg0: boolean): com.sun.org.apache.xalan.internal.xsltc.runtime.output.TransletOutputHandlerFactory
                                        public constructor(arg0: boolean)
                                        public setOutputType(arg0: int): void
                                        public setEncoding(arg0: java.lang.String | string): void
                                        public setOutputMethod(arg0: java.lang.String | string): void
                                        public setOutputStream(arg0: java.io.OutputStream): void
                                        public setWriter(arg0: java.io.Writer): void
                                        public setHandler(arg0: org.xml.sax.ContentHandler): void
                                        public setLexicalHandler(arg0: org.xml.sax.ext.LexicalHandler): void
                                        public setNode(arg0: org.w3c.dom.Node): void
                                        public getNode(): org.w3c.dom.Node
                                        public setNextSibling(arg0: org.w3c.dom.Node): void
                                        public getXMLEventWriter(): javax.xml.stream.XMLEventWriter
                                        public setXMLEventWriter(arg0: javax.xml.stream.XMLEventWriter): void
                                        public getXMLStreamWriter(): javax.xml.stream.XMLStreamWriter
                                        public setXMLStreamWriter(arg0: javax.xml.stream.XMLStreamWriter): void
                                        public setIndentNumber(arg0: int): void
                                        public getSerializationHandler(): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}