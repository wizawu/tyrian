declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class ParserConfigurationSettings implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager {
                                protected static readonly PARSER_SETTINGS: string
                                protected fRecognizedProperties: java.util.Set<java.lang.String>
                                protected fProperties: java.util.Map<java.lang.String, java.lang.Object>
                                protected fRecognizedFeatures: java.util.Set<java.lang.String>
                                protected fFeatures: java.util.Map<java.lang.String, java.lang.Boolean>
                                protected fParentSettings: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
                                public addRecognizedFeatures(arg0: java.lang.String[]): void
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public addRecognizedProperties(arg0: java.lang.String[]): void
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeature(arg0: java.lang.String | string): boolean
                                public getFeature(arg0: java.lang.String | string, arg1: boolean): boolean
                                public getFeatureState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.FeatureState
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public getProperty(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                                public getPropertyState(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.PropertyState
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