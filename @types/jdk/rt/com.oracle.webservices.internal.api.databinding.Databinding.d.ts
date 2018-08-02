declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
interface Databinding {
    createJavaCallInfo(arg0: java.lang.reflect.Method, arg1: java.lang.Object[]): com.oracle.webservices.internal.api.databinding.JavaCallInfo
    serializeRequest(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.message.MessageContext
    deserializeResponse(arg0: com.oracle.webservices.internal.api.message.MessageContext, arg1: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.databinding.JavaCallInfo
    deserializeRequest(arg0: com.oracle.webservices.internal.api.message.MessageContext): com.oracle.webservices.internal.api.databinding.JavaCallInfo
    serializeResponse(arg0: com.oracle.webservices.internal.api.databinding.JavaCallInfo): com.oracle.webservices.internal.api.message.MessageContext
}

                    }
                }
            }
        }
    }
}