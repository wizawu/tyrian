declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            interface PropertyGetter {
                                getType(): java.lang.Class
                                getAnnotation<A>(arg0: java.lang.Class<A>): A
                                get<A>(arg0: java.lang.Object): java.lang.Object
                            }
                        }
                    }
                }
            }
        }
    }
}