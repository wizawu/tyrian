declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace binding {
                        class WebServiceFeatureList extends java.util.AbstractMap<java.lang.Class<javax.xml.ws.WebServiceFeature>, javax.xml.ws.WebServiceFeature> implements com.sun.xml.internal.ws.api.WSFeatureList {
                            public static toList(arg0: java.lang.Iterable<javax.xml.ws.WebServiceFeature>): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public constructor()
                            public constructor(...arg0: javax.xml.ws.WebServiceFeature[])
                            public validate(): void
                            public constructor(arg0: com.sun.xml.internal.ws.binding.WebServiceFeatureList)
                            public constructor(arg0: java.lang.Class<any>)
                            public parseAnnotations(arg0: java.lang.Iterable<java.lang.annotation.Annotation>): void
                            public static getFeature(arg0: java.lang.annotation.Annotation): javax.xml.ws.WebServiceFeature
                            public parseAnnotations(arg0: java.lang.Class<any>): void
                            public iterator(): java.util.Iterator<javax.xml.ws.WebServiceFeature>
                            public toArray(): javax.xml.ws.WebServiceFeature[]
                            public isEnabled(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>): boolean
                            public contains(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>): boolean
                            public get<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
                            public add<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.ws.WebServiceFeature | javax.xml.ws.WebServiceFeature$$Lambda): void
                            public addAll<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Iterable<javax.xml.ws.WebServiceFeature>): void
                            public equals<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Object): boolean
                            public toString<F extends javax.xml.ws.WebServiceFeature>(): string
                            public mergeFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Iterable<javax.xml.ws.WebServiceFeature>, arg1: boolean): void
                            public mergeFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.ws.WebServiceFeature[], arg1: boolean): void
                            public mergeFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: boolean, arg2: boolean): void
                            public setParentFeaturedObject<F extends javax.xml.ws.WebServiceFeature>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLFeaturedObject): void
                            public static getFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.ws.WebServiceFeature[], arg1: java.lang.Class<F>): F
                            public entrySet<F extends javax.xml.ws.WebServiceFeature>(): java.util.Set<java.util.Map$Entry<java.lang.Class<javax.xml.ws.WebServiceFeature>, javax.xml.ws.WebServiceFeature>>
                            public put<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>, arg1: javax.xml.ws.WebServiceFeature | javax.xml.ws.WebServiceFeature$$Lambda): javax.xml.ws.WebServiceFeature
                            public static getSoapVersion<F extends javax.xml.ws.WebServiceFeature>(arg0: com.sun.xml.internal.ws.api.WSFeatureList): com.sun.xml.internal.ws.api.SOAPVersion
                            public static isFeatureEnabled<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>, arg1: javax.xml.ws.WebServiceFeature[]): boolean
                            public static toFeatureArray<F extends javax.xml.ws.WebServiceFeature>(arg0: com.sun.xml.internal.ws.api.WSBinding): javax.xml.ws.WebServiceFeature[]
                            public put<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}