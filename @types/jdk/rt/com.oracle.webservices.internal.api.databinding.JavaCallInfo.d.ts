declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace databinding {
                        interface JavaCallInfo {
                            getMethod(): java.lang.reflect.Method
                            getParameters(): java.lang.Object[]
                            getReturnValue(): java.lang.Object
                            setReturnValue(arg0: java.lang.Object): void
                            getException(): java.lang.Throwable
                            setException(arg0: java.lang.Throwable): void
                        }
                    }
                }
            }
        }
    }
}