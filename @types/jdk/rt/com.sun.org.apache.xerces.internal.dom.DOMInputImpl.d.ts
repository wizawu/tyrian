declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class DOMInputImpl implements org.w3c.dom.ls.LSInput {
                                protected fPublicId: string
                                protected fSystemId: string
                                protected fBaseSystemId: string
                                protected fByteStream: java.io.InputStream
                                protected fCharStream: java.io.Reader
                                protected fData: string
                                protected fEncoding: string
                                protected fCertifiedText: boolean
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.InputStream | java.io.InputStream$$Lambda, arg4: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.Reader, arg4: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
                                public getByteStream(): java.io.InputStream
                                public setByteStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                                public getCharacterStream(): java.io.Reader
                                public setCharacterStream(arg0: java.io.Reader): void
                                public getStringData(): string
                                public setStringData(arg0: java.lang.String | string): void
                                public getEncoding(): string
                                public setEncoding(arg0: java.lang.String | string): void
                                public getPublicId(): string
                                public setPublicId(arg0: java.lang.String | string): void
                                public getSystemId(): string
                                public setSystemId(arg0: java.lang.String | string): void
                                public getBaseURI(): string
                                public setBaseURI(arg0: java.lang.String | string): void
                                public getCertifiedText(): boolean
                                public setCertifiedText(arg0: boolean): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}