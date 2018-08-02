declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface ServiceDefinition extends java.lang.Iterable<com.sun.xml.internal.ws.api.server.SDDocument> {
                                getPrimary(): com.sun.xml.internal.ws.api.server.SDDocument
                                addFilter(arg0: com.sun.xml.internal.ws.api.server.SDDocumentFilter | com.sun.xml.internal.ws.api.server.SDDocumentFilter$$Lambda): void
                            }
                        }
                    }
                }
            }
        }
    }
}