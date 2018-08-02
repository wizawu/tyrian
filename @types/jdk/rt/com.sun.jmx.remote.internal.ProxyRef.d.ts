declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    class ProxyRef implements java.rmi.server.RemoteRef {
                        protected ref: java.rmi.server.RemoteRef
                        public constructor(arg0: java.rmi.server.RemoteRef)
                        public readExternal(arg0: java.io.ObjectInput): void
                        public writeExternal(arg0: java.io.ObjectOutput): void
                        public invoke(arg0: java.rmi.server.RemoteCall): void
                        public invoke(arg0: java.rmi.Remote, arg1: java.lang.reflect.Method, arg2: java.lang.Object[], arg3: long): java.lang.Object
                        public done(arg0: java.rmi.server.RemoteCall): void
                        public getRefClass(arg0: java.io.ObjectOutput): string
                        public newCall(arg0: java.rmi.server.RemoteObject, arg1: java.rmi.server.Operation[], arg2: int, arg3: long): java.rmi.server.RemoteCall
                        public remoteEquals(arg0: java.rmi.server.RemoteRef): boolean
                        public remoteHashCode(): int
                        public remoteToString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}