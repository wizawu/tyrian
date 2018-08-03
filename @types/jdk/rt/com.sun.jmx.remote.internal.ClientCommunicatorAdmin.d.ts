declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    abstract class ClientCommunicatorAdmin {
                        public constructor(arg0: long)
                        public gotIOException(arg0: java.io.IOException): void
                        protected abstract checkConnection(): void
                        protected abstract doStart(): void
                        protected abstract doStop(): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}