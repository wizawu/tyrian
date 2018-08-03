declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    abstract class ServerCommunicatorAdmin {
                        public constructor(arg0: long)
                        public reqIncoming(): boolean
                        public rspOutgoing(): boolean
                        protected abstract doStop(): void
                        public terminate(): void
                        public static class: java.lang.Class<any>
                    }
                    interface ServerCommunicatorAdmin$$Lambda {
                        (): void
                    }
                }
            }
        }
    }
}