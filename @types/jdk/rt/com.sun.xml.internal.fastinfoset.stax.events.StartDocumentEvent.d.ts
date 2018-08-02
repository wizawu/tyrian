declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
                            class StartDocumentEvent extends com.sun.xml.internal.fastinfoset.stax.events.EventBase implements javax.xml.stream.events.StartDocument {
                                protected _systemId: string
                                protected _encoding: string
                                protected _standalone: boolean
                                protected _version: string
                                public reset(): void
                                public constructor()
                                public constructor(arg0: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                                public getSystemId(): string
                                public getCharacterEncodingScheme(): string
                                public encodingSet(): boolean
                                public isStandalone(): boolean
                                public standaloneSet(): boolean
                                public getVersion(): string
                                public setStandalone(arg0: boolean): void
                                public setStandalone(arg0: java.lang.String | string): void
                                public setEncoding(arg0: java.lang.String | string): void
                                public setVersion(arg0: java.lang.String | string): void
                                public toString(): string
                                public isStartDocument(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}