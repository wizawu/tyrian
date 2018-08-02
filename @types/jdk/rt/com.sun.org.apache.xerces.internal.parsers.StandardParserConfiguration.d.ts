declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            class StandardParserConfiguration extends com.sun.org.apache.xerces.internal.parsers.DTDConfiguration {
                                protected static NORMALIZE_DATA: string
                                protected static SCHEMA_ELEMENT_DEFAULT: string
                                protected static SCHEMA_AUGMENT_PSVI: string
                                protected static XMLSCHEMA_VALIDATION: string
                                protected static XMLSCHEMA_FULL_CHECKING: string
                                protected static GENERATE_SYNTHETIC_ANNOTATIONS: string
                                protected static VALIDATE_ANNOTATIONS: string
                                protected static HONOUR_ALL_SCHEMALOCATIONS: string
                                protected static NAMESPACE_GROWTH: string
                                protected static TOLERATE_DUPLICATES: string
                                protected static SCHEMA_VALIDATOR: string
                                protected static SCHEMA_LOCATION: string
                                protected static SCHEMA_NONS_LOCATION: string
                                protected static SCHEMA_DV_FACTORY: string
                                protected fSchemaValidator: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                protected configurePipeline(): void
                                protected checkFeature(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                protected checkProperty(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}