declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace legacy {
                        namespace connection {
class EndPointInfoImpl implements com.sun.corba.se.spi.transport.SocketInfo , com.sun.corba.se.spi.legacy.connection.LegacyServerSocketEndPointInfo {
    protected type: string
    protected hostname: string
    protected port: int
    protected locatorPort: int
    protected name: string
    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string)
    public getType(): string
    public getHost(): string
    public getHostName(): string
    public getPort(): int
    public getLocatorPort(): int
    public setLocatorPort(arg0: int): void
    public getName(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public toString(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}