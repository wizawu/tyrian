declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class Entity$ScannedEntity extends com.sun.xml.internal.stream.Entity {
                        public static readonly DEFAULT_BUFFER_SIZE: int
                        public fBufferSize: int
                        public static readonly DEFAULT_XMLDECL_BUFFER_SIZE: int
                        public static readonly DEFAULT_INTERNAL_BUFFER_SIZE: int
                        public stream: java.io.InputStream
                        public reader: java.io.Reader
                        public entityLocation: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier
                        public encoding: string
                        public literal: boolean
                        public isExternal: boolean
                        public version: string
                        public ch: char[]
                        public position: int
                        public count: int
                        public lineNumber: int
                        public columnNumber: int
                        public xmlVersion: string
                        public fTotalCountTillLastLoad: int
                        public fLastCount: int
                        public baseCharOffset: int
                        public startPosition: int
                        public mayReadChunks: boolean
                        public xmlDeclChunkRead: boolean
                        public isGE: boolean
                        public getEncodingName(): string
                        public getEntityVersion(): string
                        public setEntityVersion(arg0: java.lang.String | string): void
                        public getEntityReader(): java.io.Reader
                        public getEntityInputStream(): java.io.InputStream
                        public constructor(arg0: boolean, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg3: java.io.InputStream | java.io.InputStream$$Lambda, arg4: java.io.Reader, arg5: java.lang.String | string, arg6: boolean, arg7: boolean, arg8: boolean)
                        public close(): void
                        public isEncodingExternallySpecified(): boolean
                        public setEncodingExternallySpecified(arg0: boolean): void
                        public isDeclaredEncoding(): boolean
                        public setDeclaredEncoding(arg0: boolean): void
                        public isExternal(): boolean
                        public isUnparsed(): boolean
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}