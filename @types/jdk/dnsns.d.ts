declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
                namespace dns {
                    class DNSNameService implements sun.net.spi.nameservice.NameService {
                        public constructor()
                        public lookupAllHostAddr(arg0: string): java.net.InetAddress[]
                        public getHostByAddr(arg0: byte[]): string
                    }
                    class DNSNameService$2 implements java.security.PrivilegedExceptionAction<javax.naming.directory.Attributes> {
                        public run(): javax.naming.directory.Attributes
                        public run(): java.lang.Object
                    }
                    class DNSNameService$1 implements java.security.PrivilegedExceptionAction<javax.naming.directory.DirContext> {
                        public run(): javax.naming.directory.DirContext
                        public run(): java.lang.Object
                    }
                    class DNSNameService$ThreadContext {
                        public constructor(arg0: javax.naming.directory.DirContext, arg1: java.util.List<java.lang.String>)
                        public dirContext(): javax.naming.directory.DirContext
                        public nameservers(): java.util.List<java.lang.String>
                    }
                    class DNSNameServiceDescriptor implements sun.net.spi.nameservice.NameServiceDescriptor {
                        public constructor()
                        public createNameService(): sun.net.spi.nameservice.NameService
                        public getProviderName(): string
                        public getType(): string
                    }
                }
            }
        }
    }
}
