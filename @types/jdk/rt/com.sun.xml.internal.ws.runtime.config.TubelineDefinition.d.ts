declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace runtime {
                        namespace config {
                            class TubelineDefinition {
                                protected clientSide: com.sun.xml.internal.ws.runtime.config.TubeFactoryList
                                protected endpointSide: com.sun.xml.internal.ws.runtime.config.TubeFactoryList
                                protected any: java.util.List<java.lang.Object>
                                protected name: string
                                public constructor()
                                public getClientSide(): com.sun.xml.internal.ws.runtime.config.TubeFactoryList
                                public setClientSide(arg0: com.sun.xml.internal.ws.runtime.config.TubeFactoryList): void
                                public getEndpointSide(): com.sun.xml.internal.ws.runtime.config.TubeFactoryList
                                public setEndpointSide(arg0: com.sun.xml.internal.ws.runtime.config.TubeFactoryList): void
                                public getAny(): java.util.List<java.lang.Object>
                                public getName(): string
                                public setName(arg0: java.lang.String | string): void
                                public getOtherAttributes(): java.util.Map<javax.xml.namespace.QName, java.lang.String>
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}