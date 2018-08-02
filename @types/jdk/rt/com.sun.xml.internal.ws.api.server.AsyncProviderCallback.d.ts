declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface AsyncProviderCallback<T> {
                                send(arg0: T): void
                                sendError(arg0: java.lang.Throwable): void
                            }
                        }
                    }
                }
            }
        }
    }
}