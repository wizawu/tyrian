declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
                        interface SocketInfo {
                            IIOP_CLEAR_TEXT: string
                            getType(): string
                            getHost(): string
                            getPort(): int
                        }
                    }
                }
            }
        }
    }
}