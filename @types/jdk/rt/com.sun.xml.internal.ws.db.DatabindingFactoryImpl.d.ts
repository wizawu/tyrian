declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace db {
                        class DatabindingFactoryImpl extends com.sun.xml.internal.ws.api.databinding.DatabindingFactory {
                            protected properties: java.util.Map<java.lang.String, java.lang.Object>
                            protected defaultRuntimeFactory: com.sun.xml.internal.ws.spi.db.DatabindingProvider
                            protected providers: java.util.List<com.sun.xml.internal.ws.spi.db.DatabindingProvider>
                            public constructor()
                            public properties(): java.util.Map<java.lang.String, java.lang.Object>
                            public provider(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig): com.sun.xml.internal.ws.spi.db.DatabindingProvider
                            public createRuntime(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig): com.oracle.webservices.internal.api.databinding.Databinding
                            public createWsdlGen(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig): com.oracle.webservices.internal.api.databinding.WSDLGenerator
                            public createBuilder(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): com.oracle.webservices.internal.api.databinding.Databinding$Builder
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}