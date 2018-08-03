declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
                        abstract class JAXBRIContext extends javax.xml.bind.JAXBContext {
                            public static readonly DEFAULT_NAMESPACE_REMAP: string
                            public static readonly TYPE_REFERENCES: string
                            public static readonly CANONICALIZATION_SUPPORT: string
                            public static readonly TREAT_EVERYTHING_NILLABLE: string
                            public static readonly ANNOTATION_READER: string
                            public static readonly ENABLE_XOP: string
                            public static readonly SUBCLASS_REPLACEMENTS: string
                            public static readonly XMLACCESSORFACTORY_SUPPORT: string
                            public static readonly RETAIN_REFERENCE_TO_INFO: string
                            public static readonly SUPRESS_ACCESSOR_WARNINGS: string
                            public static readonly IMPROVED_XSI_TYPE_HANDLING: string
                            public static readonly DISABLE_XML_SECURITY: string
                            protected constructor()
                            public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.util.Map<java.lang.Class, java.lang.Class>, arg3: java.lang.String | string, arg4: boolean, arg5: com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader): com.sun.xml.internal.bind.api.JAXBRIContext
                            public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.util.Map<java.lang.Class, java.lang.Class>, arg3: java.lang.String | string, arg4: boolean, arg5: com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean): com.sun.xml.internal.bind.api.JAXBRIContext
                            public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.lang.String | string, arg3: boolean): com.sun.xml.internal.bind.api.JAXBRIContext
                            public abstract hasSwaRef(): boolean
                            public abstract getElementName(arg0: java.lang.Object): javax.xml.namespace.QName
                            public abstract getElementName(arg0: java.lang.Class): javax.xml.namespace.QName
                            public abstract createBridge(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.bind.api.Bridge
                            public abstract createBridgeContext(): com.sun.xml.internal.bind.api.BridgeContext
                            public abstract getElementPropertyAccessor<B, V>(arg0: java.lang.Class<B>, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.bind.api.RawAccessor<B, V>
                            public abstract getKnownNamespaceURIs<B, V>(): java.util.List<java.lang.String>
                            public abstract generateSchema<B, V>(arg0: javax.xml.bind.SchemaOutputResolver | javax.xml.bind.SchemaOutputResolver$$Lambda): void
                            public abstract getTypeName<B, V>(arg0: com.sun.xml.internal.bind.api.TypeReference): javax.xml.namespace.QName
                            public abstract getBuildId<B, V>(): string
                            public abstract generateEpisode<B, V>(arg0: javax.xml.transform.Result): void
                            public abstract getRuntimeTypeInfoSet<B, V>(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
                            public static mangleNameToVariableName<B, V>(arg0: java.lang.String | string): string
                            public static mangleNameToClassName<B, V>(arg0: java.lang.String | string): string
                            public static mangleNameToPropertyName<B, V>(arg0: java.lang.String | string): string
                            public static getBaseType<B, V>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.Class): java.lang.reflect.Type
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}