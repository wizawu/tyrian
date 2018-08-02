declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace developer {
                        interface SchemaValidation extends java.lang.annotation.Annotation {
                            handler(): java.lang.Class<com.sun.xml.internal.ws.developer.ValidationErrorHandler>
                            inbound(): boolean
                            outbound(): boolean
                        }
                    }
                }
            }
        }
    }
}