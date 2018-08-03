declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        class TagInfoset {
                            public readonly ns: java.lang.String[]
                            public readonly atts: org.xml.sax.helpers.AttributesImpl
                            public readonly prefix: string
                            public readonly nsUri: string
                            public readonly localName: string
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.helpers.AttributesImpl, ...arg4: java.lang.String[])
                            public constructor(arg0: javax.xml.stream.XMLStreamReader)
                            public writeStart(arg0: org.xml.sax.ContentHandler): void
                            public writeEnd(arg0: org.xml.sax.ContentHandler): void
                            public writeStart(arg0: javax.xml.stream.XMLStreamWriter): void
                            public getNamespaceURI(arg0: java.lang.String | string): string
                            public getPrefix(arg0: java.lang.String | string): string
                            public allPrefixes(arg0: java.lang.String | string): java.util.List<java.lang.String>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}