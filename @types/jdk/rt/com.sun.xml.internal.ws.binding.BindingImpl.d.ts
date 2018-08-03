declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace binding {
                        abstract class BindingImpl implements com.sun.xml.internal.ws.api.WSBinding {
                            protected static readonly EMPTY_FEATURES: javax.xml.ws.WebServiceFeature[]
                            protected readonly features: com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            protected readonly operationFeatures: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.binding.WebServiceFeatureList>
                            protected readonly inputMessageFeatures: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.binding.WebServiceFeatureList>
                            protected readonly outputMessageFeatures: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.binding.WebServiceFeatureList>
                            protected readonly faultMessageFeatures: java.util.Map<com.sun.xml.internal.ws.binding.BindingImpl$MessageKey, com.sun.xml.internal.ws.binding.WebServiceFeatureList>
                            protected serviceMode: javax.xml.ws.Service$Mode
                            protected messageContextFactory: com.oracle.webservices.internal.api.message.MessageContextFactory
                            protected constructor(arg0: com.sun.xml.internal.ws.api.BindingID, ...arg1: javax.xml.ws.WebServiceFeature[])
                            public getHandlerChain(): java.util.List<javax.xml.ws.handler.Handler>
                            public getHandlerConfig(): com.sun.xml.internal.ws.client.HandlerConfiguration
                            protected setHandlerConfig(arg0: com.sun.xml.internal.ws.client.HandlerConfiguration): void
                            public setMode(arg0: javax.xml.ws.Service$Mode): void
                            public getKnownHeaders(): java.util.Set<javax.xml.namespace.QName>
                            public addKnownHeader(arg0: javax.xml.namespace.QName): boolean
                            public getBindingId(): com.sun.xml.internal.ws.api.BindingID
                            public getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
                            public getAddressingVersion(): com.sun.xml.internal.ws.api.addressing.AddressingVersion
                            public createCodec(): com.sun.xml.internal.ws.api.pipe.Codec
                            public static initializeJavaActivationHandlers(): void
                            public static create(arg0: com.sun.xml.internal.ws.api.BindingID): com.sun.xml.internal.ws.binding.BindingImpl
                            public static create(arg0: com.sun.xml.internal.ws.api.BindingID, arg1: javax.xml.ws.WebServiceFeature[]): com.sun.xml.internal.ws.binding.BindingImpl
                            public static getDefaultBinding(): com.sun.xml.internal.ws.api.WSBinding
                            public getBindingID(): string
                            public getFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>): F
                            public getOperationFeature<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<F>, arg1: javax.xml.namespace.QName): F
                            public isFeatureEnabled<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>): boolean
                            public isOperationFeatureEnabled<F extends javax.xml.ws.WebServiceFeature>(arg0: java.lang.Class<javax.xml.ws.WebServiceFeature>, arg1: javax.xml.namespace.QName): boolean
                            public getFeatures<F extends javax.xml.ws.WebServiceFeature>(): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public getOperationFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public getInputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public getOutputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public getFaultMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.binding.WebServiceFeatureList
                            public setOperationFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, ...arg1: javax.xml.ws.WebServiceFeature[]): void
                            public setInputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, ...arg1: javax.xml.ws.WebServiceFeature[]): void
                            public setOutputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, ...arg1: javax.xml.ws.WebServiceFeature[]): void
                            public setFaultMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, ...arg2: javax.xml.ws.WebServiceFeature[]): void
                            public getMessageContextFactory<F extends javax.xml.ws.WebServiceFeature>(): com.oracle.webservices.internal.api.message.MessageContextFactory
                            public getFaultMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            public getOutputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            public getInputMessageFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            public getOperationFeatures<F extends javax.xml.ws.WebServiceFeature>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.WSFeatureList
                            public getFeatures<F extends javax.xml.ws.WebServiceFeature>(): com.sun.xml.internal.ws.api.WSFeatureList
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}