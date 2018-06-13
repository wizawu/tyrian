declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
                namespace dns {
                    class DNSNameServiceDescriptor implements sun.net.spi.nameservice.NameServiceDescriptor {
                        public constructor()
                        public createNameService(): sun.net.spi.nameservice.NameService
                        public getProviderName(): string
                        public getType(): string
                        public static class: java.lang.Class<any>
                    }
                    class DNSNameService implements sun.net.spi.nameservice.NameService {
                        public constructor()
                        public lookupAllHostAddr(arg0: java.lang.String | string): java.net.InetAddress[]
                        public getHostByAddr(arg0: byte[]): string
                        public static class: java.lang.Class<any>
                    }
                    class DNSNameService$ThreadContext {
                        public constructor(arg0: javax.naming.directory.DirContext, arg1: java.util.List<java.lang.String>)
                        public dirContext(): javax.naming.directory.DirContext
                        public nameservers(): java.util.List<java.lang.String>
                        public static class: java.lang.Class<any>
                    }
                    class DNSNameService$1 implements java.security.PrivilegedExceptionAction<javax.naming.directory.DirContext> {
                        public run(): javax.naming.directory.DirContext
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class DNSNameService$2 implements java.security.PrivilegedExceptionAction<javax.naming.directory.Attributes> {
                        public run(): javax.naming.directory.Attributes
                        public run(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
