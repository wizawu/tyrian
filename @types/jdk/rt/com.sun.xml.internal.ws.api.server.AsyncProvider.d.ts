declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface AsyncProvider<T> {
                                invoke(arg0: T, arg1: com.sun.xml.internal.ws.api.server.AsyncProviderCallback<T>, arg2: javax.xml.ws.WebServiceContext): void
                            }
                            interface AsyncProvider$$Lambda<T> {
                                (arg0: T, arg1: com.sun.xml.internal.ws.api.server.AsyncProviderCallback<T>, arg2: javax.xml.ws.WebServiceContext): void
                            }
                        }
                    }
                }
            }
        }
    }
}