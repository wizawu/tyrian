declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        abstract class ContextClassloaderLocal<V> {
                            public get(): V
                            public set(arg0: V): void
                            protected abstract initialValue(): V
                            public static class: java.lang.Class<any>
                        }
                        interface ContextClassloaderLocal$$Lambda<V> {
                            (): V
                        }
                    }
                }
            }
        }
    }
}