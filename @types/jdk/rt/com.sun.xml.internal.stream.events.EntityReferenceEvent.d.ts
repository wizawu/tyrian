declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class EntityReferenceEvent extends com.sun.xml.internal.stream.events.DummyEvent implements javax.xml.stream.events.EntityReference {
                            public constructor()
                            public constructor(arg0: java.lang.String | string, arg1: javax.xml.stream.events.EntityDeclaration)
                            public getName(): string
                            public toString(): string
                            protected writeAsEncodedUnicodeEx(arg0: java.io.Writer | java.io.Writer$$Lambda): void
                            public getDeclaration(): javax.xml.stream.events.EntityDeclaration
                            protected init(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}