declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace legacy {
                        namespace connection {
interface LegacyServerSocketEndPointInfo {
    DEFAULT_ENDPOINT: string
    BOOT_NAMING: string
    NO_NAME: string
    getType(): string
    getHostName(): string
    getPort(): int
    getLocatorPort(): int
    setLocatorPort(arg0: int): void
    getName(): string
}

                        }
                    }
                }
            }
        }
    }
}