declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            abstract class XMLParser {
                                protected static ENTITY_RESOLVER: string
                                protected static ERROR_HANDLER: string
                                protected fConfiguration: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration
                                public getFeature(arg0: java.lang.String | string): boolean
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
                                public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                protected reset(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}