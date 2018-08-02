declare namespace com {
    namespace sun {
        namespace jndi {
            namespace rmi {
                namespace registry {
                    interface RemoteReference extends java.rmi.Remote {
                        getReference(): javax.naming.Reference
                    }
                }
            }
        }
    }
}