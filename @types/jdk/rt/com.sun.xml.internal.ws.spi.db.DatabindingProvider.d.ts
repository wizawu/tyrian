declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            interface DatabindingProvider {
                                isFor(arg0: java.lang.String | string): boolean
                                init(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
                                create(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig): com.oracle.webservices.internal.api.databinding.Databinding
                                wsdlGen(arg0: com.sun.xml.internal.ws.api.databinding.DatabindingConfig): com.oracle.webservices.internal.api.databinding.WSDLGenerator
                            }
                        }
                    }
                }
            }
        }
    }
}