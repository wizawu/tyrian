declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
                interface NameServiceDescriptor {
                    createNameService(): sun.net.spi.nameservice.NameService
                    getProviderName(): string
                    getType(): string
                }
            }
        }
    }
}