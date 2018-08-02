declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class OutputFormat {
                                public constructor()
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
                                public constructor(arg0: org.w3c.dom.Document)
                                public constructor(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: boolean)
                                public getMethod(): string
                                public setMethod(arg0: java.lang.String | string): void
                                public getVersion(): string
                                public setVersion(arg0: java.lang.String | string): void
                                public getIndent(): int
                                public getIndenting(): boolean
                                public setIndent(arg0: int): void
                                public setIndenting(arg0: boolean): void
                                public getEncoding(): string
                                public setEncoding(arg0: java.lang.String | string): void
                                public setEncoding(arg0: com.sun.org.apache.xml.internal.serialize.EncodingInfo): void
                                public getEncodingInfo(): com.sun.org.apache.xml.internal.serialize.EncodingInfo
                                public setAllowJavaNames(arg0: boolean): void
                                public setAllowJavaNames(): boolean
                                public getMediaType(): string
                                public setMediaType(arg0: java.lang.String | string): void
                                public setDoctype(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getDoctypePublic(): string
                                public getDoctypeSystem(): string
                                public getOmitComments(): boolean
                                public setOmitComments(arg0: boolean): void
                                public getOmitDocumentType(): boolean
                                public setOmitDocumentType(arg0: boolean): void
                                public getOmitXMLDeclaration(): boolean
                                public setOmitXMLDeclaration(arg0: boolean): void
                                public getStandalone(): boolean
                                public setStandalone(arg0: boolean): void
                                public getCDataElements(): java.lang.String[]
                                public isCDataElement(arg0: java.lang.String | string): boolean
                                public setCDataElements(arg0: java.lang.String[]): void
                                public getNonEscapingElements(): java.lang.String[]
                                public isNonEscapingElement(arg0: java.lang.String | string): boolean
                                public setNonEscapingElements(arg0: java.lang.String[]): void
                                public getLineSeparator(): string
                                public setLineSeparator(arg0: java.lang.String | string): void
                                public getPreserveSpace(): boolean
                                public setPreserveSpace(arg0: boolean): void
                                public getLineWidth(): int
                                public setLineWidth(arg0: int): void
                                public getPreserveEmptyAttributes(): boolean
                                public setPreserveEmptyAttributes(arg0: boolean): void
                                public getLastPrintable(): char
                                public static whichMethod(arg0: org.w3c.dom.Document): string
                                public static whichDoctypePublic(arg0: org.w3c.dom.Document): string
                                public static whichDoctypeSystem(arg0: org.w3c.dom.Document): string
                                public static whichMediaType(arg0: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}