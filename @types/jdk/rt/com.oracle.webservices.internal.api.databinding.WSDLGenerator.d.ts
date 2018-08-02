declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
                        interface WSDLGenerator {
                            inlineSchema(arg0: boolean): com.oracle.webservices.internal.api.databinding.WSDLGenerator
                            property(arg0: java.lang.String | string, arg1: java.lang.Object): com.oracle.webservices.internal.api.databinding.WSDLGenerator
                            generate(arg0: com.oracle.webservices.internal.api.databinding.WSDLResolver): void
                            generate(arg0: java.io.File, arg1: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}