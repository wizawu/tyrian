declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLEntityManager implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver {
                                public static readonly DEFAULT_BUFFER_SIZE: int
                                public static readonly DEFAULT_XMLDECL_BUFFER_SIZE: int
                                public static readonly DEFAULT_INTERNAL_BUFFER_SIZE: int
                                protected static readonly VALIDATION: string
                                protected fStrictURI: boolean
                                protected static readonly EXTERNAL_GENERAL_ENTITIES: string
                                protected static readonly EXTERNAL_PARAMETER_ENTITIES: string
                                protected static readonly ALLOW_JAVA_ENCODINGS: string
                                protected static readonly WARN_ON_DUPLICATE_ENTITYDEF: string
                                protected static readonly LOAD_EXTERNAL_DTD: string
                                protected static readonly SYMBOL_TABLE: string
                                protected static readonly ERROR_REPORTER: string
                                protected static readonly STANDARD_URI_CONFORMANT: string
                                protected static readonly ENTITY_RESOLVER: string
                                protected static readonly STAX_ENTITY_RESOLVER: string
                                protected static readonly VALIDATION_MANAGER: string
                                protected static readonly BUFFER_SIZE: string
                                protected static readonly SECURITY_MANAGER: string
                                protected static readonly PARSER_SETTINGS: string
                                protected fWarnDuplicateEntityDef: boolean
                                protected fValidation: boolean
                                protected fExternalGeneralEntities: boolean
                                protected fExternalParameterEntities: boolean
                                protected fAllowJavaEncodings: boolean
                                protected fLoadExternalDTD: boolean
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                protected fStaxEntityResolver: com.sun.xml.internal.stream.StaxEntityResolverWrapper
                                protected fPropertyManager: com.sun.org.apache.xerces.internal.impl.PropertyManager
                                protected fAccessExternalDTD: string
                                protected fValidationManager: com.sun.org.apache.xerces.internal.impl.validation.ValidationManager
                                protected fBufferSize: int
                                protected fSecurityManager: com.sun.org.apache.xerces.internal.utils.XMLSecurityManager
                                protected fLimitAnalyzer: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer
                                protected entityExpansionIndex: int
                                protected fStandalone: boolean
                                protected fInExternalSubset: boolean
                                protected fEntityHandler: com.sun.org.apache.xerces.internal.impl.XMLEntityHandler
                                protected fEntityScanner: com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
                                protected fXML10EntityScanner: com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
                                protected fXML11EntityScanner: com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
                                protected fEntityExpansionCount: int
                                protected fEntities: java.util.Map<java.lang.String, com.sun.xml.internal.stream.Entity>
                                protected fEntityStack: java.util.Stack<com.sun.xml.internal.stream.Entity>
                                protected fCurrentEntity: com.sun.xml.internal.stream.Entity$ScannedEntity
                                protected fEntityStorage: com.sun.xml.internal.stream.XMLEntityStorage
                                protected readonly defaultEncoding: java.lang.Object[]
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager)
                                public addInternalEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public addExternalEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public addUnparsedEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                public getEntityStore(): com.sun.xml.internal.stream.XMLEntityStorage
                                public getEntityScanner(): com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
                                public setScannerVersion(arg0: short): void
                                public setupCurrentEntity(arg0: boolean, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg3: boolean, arg4: boolean): string
                                public isExternalEntity(arg0: java.lang.String | string): boolean
                                public isEntityDeclInExternalSubset(arg0: java.lang.String | string): boolean
                                public setStandalone(arg0: boolean): void
                                public isStandalone(): boolean
                                public isDeclaredEntity(arg0: java.lang.String | string): boolean
                                public isUnparsedEntity(arg0: java.lang.String | string): boolean
                                public getCurrentResourceIdentifier(): com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier
                                public setEntityHandler(arg0: com.sun.org.apache.xerces.internal.impl.XMLEntityHandler): void
                                public resolveEntityAsPerStax(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.xml.internal.stream.StaxXMLInputSource
                                public resolveEntity(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                                public startEntity(arg0: boolean, arg1: java.lang.String | string, arg2: boolean): void
                                public startDocumentEntity(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                public startDTDEntity(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                public startExternalSubset(): void
                                public endExternalSubset(): void
                                public startEntity(arg0: boolean, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg3: boolean, arg4: boolean): void
                                public getCurrentEntity(): com.sun.xml.internal.stream.Entity$ScannedEntity
                                public getTopLevelEntity(): com.sun.xml.internal.stream.Entity$ScannedEntity
                                public closeReaders(): void
                                public endEntity(): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public reset(): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public setLimitAnalyzer(arg0: com.sun.org.apache.xerces.internal.utils.XMLLimitAnalyzer): void
                                public getRecognizedProperties(): java.lang.String[]
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public static expandSystemId(arg0: java.lang.String | string): string
                                public static absolutizeAgainstUserDir(arg0: com.sun.org.apache.xerces.internal.util.URI): void
                                public static expandSystemId(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static expandSystemId(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
                                public static setInstanceFollowRedirects(arg0: java.net.HttpURLConnection, arg1: boolean): void
                                protected getEncodingName(arg0: byte[], arg1: int): java.lang.Object[]
                                protected createReader(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: java.lang.String | string, arg2: java.lang.Boolean | boolean): java.io.Reader
                                public getPublicId(): string
                                public getExpandedSystemId(): string
                                public getLiteralSystemId(): string
                                public getLineNumber(): int
                                public getColumnNumber(): int
                                protected static fixURI(arg0: java.lang.String | string): string
                                public test(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}