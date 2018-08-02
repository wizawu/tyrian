declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                namespace pool {
                    interface PooledConnectionFactory {
                        createPooledConnection(arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                    }
                    interface PooledConnectionFactory$$Lambda {
                        (arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                    }
                }
            }
        }
    }
}