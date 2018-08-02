declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLEntityScanner implements com.sun.org.apache.xerces.internal.xni.XMLLocator {
                                protected fCurrentEntity: com.sun.xml.internal.stream.Entity$ScannedEntity
                                protected fBufferSize: int
                                protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
                                protected fSecurityManager: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager
                                protected fLimitAnalyzer: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fAllowJavaEncodings: boolean
                                protected static SYMBOL_TABLE: string
                                protected static ERROR_REPORTER: string
                                protected static ALLOW_JAVA_ENCODINGS: string
                                protected fPropertyManager: com.sun.org.apache.xerces.internal.impl.PropertyManager
                                protected xmlVersionSetExplicitly: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager, arg1: com.sun.org.apache.xerces.internal.impl.XMLEntityManager | com.sun.org.apache.xerces.internal.impl.XMLEntityManager$$Lambda)
                                public setBufferSize(arg0: int): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.impl.XMLEntityManager | com.sun.org.apache.xerces.internal.impl.XMLEntityManager$$Lambda, arg2: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
                                public getXMLVersion(): string
                                public setXMLVersion(arg0: java.lang.String | string): void
                                public setCurrentEntity(arg0: com.sun.xml.internal.stream.Entity$ScannedEntity): void
                                public getCurrentEntity(): com.sun.xml.internal.stream.Entity$ScannedEntity
                                public getBaseSystemId(): string
                                public setBaseSystemId(arg0: java.lang.String | string): void
                                public getLineNumber(): int
                                public setLineNumber(arg0: int): void
                                public getColumnNumber(): int
                                public setColumnNumber(arg0: int): void
                                public getCharacterOffset(): int
                                public getExpandedSystemId(): string
                                public setExpandedSystemId(arg0: java.lang.String | string): void
                                public getLiteralSystemId(): string
                                public setLiteralSystemId(arg0: java.lang.String | string): void
                                public getPublicId(): string
                                public setPublicId(arg0: java.lang.String | string): void
                                public setVersion(arg0: java.lang.String | string): void
                                public getVersion(): string
                                public getEncoding(): string
                                public setEncoding(arg0: java.lang.String | string): void
                                public isExternal(): boolean
                                public getChar(arg0: int): int
                                public peekChar(): int
                                protected scanChar(arg0: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): int
                                protected scanNmtoken(): string
                                protected scanName(arg0: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): string
                                protected scanQName(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): boolean
                                protected checkBeforeLoad(arg0: com.sun.xml.internal.stream.Entity$ScannedEntity, arg1: int, arg2: int): int
                                protected checkEntityLimit(arg0: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType, arg1: com.sun.xml.internal.stream.Entity$ScannedEntity, arg2: int, arg3: int): void
                                protected checkNodeCount(arg0: com.sun.xml.internal.stream.Entity$ScannedEntity): void
                                protected checkLimit(arg0: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager$Limit, arg1: com.sun.xml.internal.stream.Entity$ScannedEntity, arg2: int, arg3: int): void
                                protected scanContent(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
                                protected scanLiteral(arg0: int, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: boolean): int
                                protected scanData(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): boolean
                                protected skipChar(arg0: int, arg1: com.sun.org.apache.xerces.internal.impl.XMLScanner$NameType): boolean
                                public isSpace(arg0: char): boolean
                                protected skipSpaces(): boolean
                                public arrangeCapacity(arg0: int): boolean
                                public arrangeCapacity(arg0: int, arg1: boolean): boolean
                                protected skipString(arg0: java.lang.String | string): boolean
                                protected skipString(arg0: char[]): boolean
                                protected createReader(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: java.lang.Boolean | boolean): java.io.Reader
                                protected getEncodingName(arg0: byte[], arg1: int): java.lang.Object[]
                                public registerListener(arg0: com.sun.xml.internal.stream.XMLBufferListener): void
                                public invokeListeners(arg0: int): void
                                protected skipDeclSpaces(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}