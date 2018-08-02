declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            interface CheckedException {
                                getOwner(): com.sun.xml.internal.ws.api.model.SEIModel
                                getParent(): com.sun.xml.internal.ws.api.model.JavaMethod
                                getExceptionClass(): java.lang.Class
                                getDetailBean(): java.lang.Class
                                getBridge(): com.sun.xml.internal.bind.api.Bridge
                                getExceptionType(): com.sun.xml.internal.ws.api.model.ExceptionType
                                getMessageName(): string
                            }
                        }
                    }
                }
            }
        }
    }
}