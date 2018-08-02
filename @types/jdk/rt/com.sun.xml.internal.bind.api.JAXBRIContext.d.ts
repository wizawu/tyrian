declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
abstract class JAXBRIContext extends javax.xml.bind.JAXBContext {
    public static DEFAULT_NAMESPACE_REMAP: string
    public static TYPE_REFERENCES: string
    public static CANONICALIZATION_SUPPORT: string
    public static TREAT_EVERYTHING_NILLABLE: string
    public static ANNOTATION_READER: string
    public static ENABLE_XOP: string
    public static SUBCLASS_REPLACEMENTS: string
    public static XMLACCESSORFACTORY_SUPPORT: string
    public static RETAIN_REFERENCE_TO_INFO: string
    public static SUPRESS_ACCESSOR_WARNINGS: string
    public static IMPROVED_XSI_TYPE_HANDLING: string
    public static DISABLE_XML_SECURITY: string
    protected constructor()
    public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.util.Map<java.lang.Class, java.lang.Class>, arg3: java.lang.String | string, arg4: boolean, arg5: com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader): com.sun.xml.internal.bind.api.JAXBRIContext
    public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.util.Map<java.lang.Class, java.lang.Class>, arg3: java.lang.String | string, arg4: boolean, arg5: com.sun.xml.internal.bind.v2.model.annotation.RuntimeAnnotationReader, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean): com.sun.xml.internal.bind.api.JAXBRIContext
    public static newInstance(arg0: java.lang.Class[], arg1: java.util.Collection<com.sun.xml.internal.bind.api.TypeReference>, arg2: java.lang.String | string, arg3: boolean): com.sun.xml.internal.bind.api.JAXBRIContext
    public hasSwaRef(): boolean
    public getElementName(arg0: java.lang.Object): javax.xml.namespace.QName
    public getElementName(arg0: java.lang.Class): javax.xml.namespace.QName
    public createBridge(arg0: com.sun.xml.internal.bind.api.TypeReference): com.sun.xml.internal.bind.api.Bridge
    public createBridgeContext(): com.sun.xml.internal.bind.api.BridgeContext
    public getElementPropertyAccessor<B, V>(arg0: java.lang.Class<B>, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.xml.internal.bind.api.RawAccessor<B, V>
    public getKnownNamespaceURIs(): java.util.List<java.lang.String>
    public generateSchema(arg0: javax.xml.bind.SchemaOutputResolver): void
    public getTypeName(arg0: com.sun.xml.internal.bind.api.TypeReference): javax.xml.namespace.QName
    public getBuildId(): string
    public generateEpisode(arg0: javax.xml.transform.Result): void
    public getRuntimeTypeInfoSet(): com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfoSet
    public static mangleNameToVariableName(arg0: java.lang.String | string): string
    public static mangleNameToClassName(arg0: java.lang.String | string): string
    public static mangleNameToPropertyName(arg0: java.lang.String | string): string
    public static getBaseType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.Class): java.lang.reflect.Type
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}