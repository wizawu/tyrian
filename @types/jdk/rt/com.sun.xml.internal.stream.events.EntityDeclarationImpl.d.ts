declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class EntityDeclarationImpl extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.EntityDeclaration {
                            public constructor()
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier)
                            public setEntityName(arg0: java.lang.String | string): void
                            public getEntityName(): string
                            public setEntityReplacementText(arg0: java.lang.String | string): void
                            public setXMLResourceIdentifier(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): void
                            public getXMLResourceIdentifier(): com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier
                            public getSystemId(): string
                            public getPublicId(): string
                            public getBaseURI(): string
                            public getName(): string
                            public getNotationName(): string
                            public setNotationName(arg0: java.lang.String | string): void
                            public getReplacementText(): string
                            protected init(): void
                            protected writeAsEncodedUnicodeEx(arg0: java.io.Writer): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}