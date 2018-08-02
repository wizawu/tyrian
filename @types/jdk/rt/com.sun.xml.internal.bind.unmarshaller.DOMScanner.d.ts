declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace unmarshaller {
                        class DOMScanner implements com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx , com.sun.xml.internal.bind.unmarshaller.InfosetScanner {
                            public constructor()
                            public setLocator(arg0: org.xml.sax.Locator): void
                            public scan(arg0: java.lang.Object): void
                            public scan(arg0: org.w3c.dom.Document): void
                            public scan(arg0: org.w3c.dom.Element): void
                            public parse(arg0: org.w3c.dom.Element, arg1: org.xml.sax.ContentHandler): void
                            public parseWithContext(arg0: org.w3c.dom.Element, arg1: org.xml.sax.ContentHandler): void
                            public visit(arg0: org.w3c.dom.Element): void
                            public getCurrentLocation(): org.w3c.dom.Node
                            public getCurrentElement(): java.lang.Object
                            public getLocator(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx
                            public setContentHandler(arg0: org.xml.sax.ContentHandler): void
                            public getContentHandler(): org.xml.sax.ContentHandler
                            public getPublicId(): string
                            public getSystemId(): string
                            public getLineNumber(): int
                            public getColumnNumber(): int
                            public getLocation(): javax.xml.bind.ValidationEventLocator
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}