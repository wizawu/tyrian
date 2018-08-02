declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
                            class EntityDeclarationImpl extends com.sun.xml.internal.fastinfoset.stax.events.EventBase implements javax.xml.stream.events.EntityDeclaration {
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                                public getPublicId(): string
                                public getSystemId(): string
                                public getName(): string
                                public getNotationName(): string
                                public getReplacementText(): string
                                public getBaseURI(): string
                                public setPublicId(arg0: java.lang.String | string): void
                                public setSystemId(arg0: java.lang.String | string): void
                                public setBaseURI(arg0: java.lang.String | string): void
                                public setName(arg0: java.lang.String | string): void
                                public setReplacementText(arg0: java.lang.String | string): void
                                public setNotationName(arg0: java.lang.String | string): void
                                protected init(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}