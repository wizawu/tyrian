declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            interface XSLOutputAttributes {
                                getDoctypePublic(): string
                                getDoctypeSystem(): string
                                getEncoding(): string
                                getIndent(): boolean
                                getIndentAmount(): int
                                getMediaType(): string
                                getOmitXMLDeclaration(): boolean
                                getStandalone(): string
                                getVersion(): string
                                setCdataSectionElements(arg0: java.util.Vector): void
                                setDoctype(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                setDoctypePublic(arg0: java.lang.String | string): void
                                setDoctypeSystem(arg0: java.lang.String | string): void
                                setEncoding(arg0: java.lang.String | string): void
                                setIndent(arg0: boolean): void
                                setMediaType(arg0: java.lang.String | string): void
                                setOmitXMLDeclaration(arg0: boolean): void
                                setStandalone(arg0: java.lang.String | string): void
                                setVersion(arg0: java.lang.String | string): void
                            }
                        }
                    }
                }
            }
        }
    }
}