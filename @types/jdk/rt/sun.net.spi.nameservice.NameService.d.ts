declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
interface NameService {
    lookupAllHostAddr(arg0: java.lang.String | string): java.net.InetAddress[]
    getHostByAddr(arg0: byte[]): string
}

            }
        }
    }
}