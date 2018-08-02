declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            interface Translet {
                                transform(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                transform(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler[]): void
                                transform(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                addParameter(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                                buildKeys(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler, arg3: int): void
                                addAuxiliaryClass(arg0: java.lang.Class): void
                                getAuxiliaryClass(arg0: java.lang.String | string): java.lang.Class
                                getNamesArray(): java.lang.String[]
                                getUrisArray(): java.lang.String[]
                                getTypesArray(): int[]
                                getNamespaceArray(): java.lang.String[]
                                overrideDefaultParser(): boolean
                                setOverrideDefaultParser(arg0: boolean): void
                            }
                        }
                    }
                }
            }
        }
    }
}