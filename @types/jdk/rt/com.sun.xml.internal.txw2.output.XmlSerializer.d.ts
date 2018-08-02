declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
                        interface XmlSerializer {
                            startDocument(): void
                            beginStartTag(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.StringBuilder): void
                            writeXmlns(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            endStartTag(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            endTag(): void
                            text(arg0: java.lang.StringBuilder): void
                            cdata(arg0: java.lang.StringBuilder): void
                            comment(arg0: java.lang.StringBuilder): void
                            endDocument(): void
                            flush(): void
                        }
                    }
                }
            }
        }
    }
}