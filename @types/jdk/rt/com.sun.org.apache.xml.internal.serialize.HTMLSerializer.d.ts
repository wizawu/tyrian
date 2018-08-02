declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class HTMLSerializer extends com.sun.org.apache.xml.internal.serialize.BaseMarkupSerializer {
                                public static XHTMLNamespace: string
                                protected constructor(arg0: boolean, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.Writer | java.io.Writer$$Lambda, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public setOutputFormat(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): void
                                public setXHTMLNamespace(arg0: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endElementIO(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
                                public endElement(arg0: java.lang.String | string): void
                                protected startDocument(arg0: java.lang.String | string): void
                                protected serializeElement(arg0: org.w3c.dom.Element): void
                                protected characters(arg0: java.lang.String | string): void
                                protected getEntityRef(arg0: int): string
                                protected escapeURI(arg0: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}