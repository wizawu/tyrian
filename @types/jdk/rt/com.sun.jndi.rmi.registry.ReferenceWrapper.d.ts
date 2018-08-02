declare namespace com {
    namespace sun {
        namespace jndi {
            namespace rmi {
                namespace registry {
                    class ReferenceWrapper extends java.rmi.server.UnicastRemoteObject implements com.sun.jndi.rmi.registry.RemoteReference {
                        protected wrappee: javax.naming.Reference
                        public constructor(arg0: javax.naming.Reference)
                        public getReference(): javax.naming.Reference
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}