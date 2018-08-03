declare namespace jdk {
    namespace xml {
        namespace internal {
            class JdkXmlFeatures {
                public static readonly ORACLE_JAXP_PROPERTY_PREFIX: string
                public static readonly XML_FEATURE_MANAGER: string
                public static readonly ORACLE_FEATURE_SERVICE_MECHANISM: string
                public static readonly ORACLE_ENABLE_EXTENSION_FUNCTION: string
                public static readonly SP_ENABLE_EXTENSION_FUNCTION: string
                public static readonly SP_ENABLE_EXTENSION_FUNCTION_SPEC: string
                public constructor(arg0: boolean)
                public update(): void
                public setFeature(arg0: java.lang.String | string, arg1: jdk.xml.internal.JdkXmlFeatures$State, arg2: java.lang.Object): boolean
                public setFeature(arg0: jdk.xml.internal.JdkXmlFeatures$XmlFeature, arg1: jdk.xml.internal.JdkXmlFeatures$State, arg2: boolean): void
                public getFeature(arg0: jdk.xml.internal.JdkXmlFeatures$XmlFeature): boolean
                public getFeature(arg0: int): boolean
                public setFeature(arg0: int, arg1: jdk.xml.internal.JdkXmlFeatures$State, arg2: java.lang.Object): void
                public setFeature(arg0: int, arg1: jdk.xml.internal.JdkXmlFeatures$State, arg2: boolean): void
                public getIndex(arg0: java.lang.String | string): int
                public static class: java.lang.Class<any>
            }
        }
    }
}