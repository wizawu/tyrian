declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class NotationDeclarationImpl extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.NotationDeclaration {
                            public constructor()
                            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                            public constructor(arg0: com.sun.xml.internal.stream.dtd.nonvalidating.XMLNotationDecl)
                            public getName(): string
                            public getPublicId(): string
                            public getSystemId(): string
                            protected writeAsEncodedUnicodeEx(arg0: java.io.Writer): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}