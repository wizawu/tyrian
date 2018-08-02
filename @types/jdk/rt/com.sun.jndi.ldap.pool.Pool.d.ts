declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                namespace pool {
                    class Pool {
                        public constructor(arg0: int, arg1: int, arg2: int)
                        public getPooledConnection(arg0: java.lang.Object, arg1: long, arg2: com.sun.jndi.ldap.pool.PooledConnectionFactory | com.sun.jndi.ldap.pool.PooledConnectionFactory$$Lambda): com.sun.jndi.ldap.pool.PooledConnection
                        public expire(arg0: long): void
                        public showStats(arg0: java.io.PrintStream): void
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}