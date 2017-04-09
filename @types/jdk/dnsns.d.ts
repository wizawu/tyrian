declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
                namespace dns {
                    class DNSNameService implements sun.net.spi.nameservice.NameService {
                        static $assertionsDisabled: boolean
                        public constructor()
                        public lookupAllHostAddr(arg0: java.lang.String): java.net.InetAddress[]
                        public getHostByAddr(arg0: byte[]): java.lang.String
                    }
                    class DNSNameServiceDescriptor implements sun.net.spi.nameservice.NameServiceDescriptor {
                        public constructor()
                        public createNameService(): sun.net.spi.nameservice.NameService
                        public getProviderName(): java.lang.String
                        public getType(): java.lang.String
                    }
                    
                }
                
            }
            
        }
        
    }
    
}
