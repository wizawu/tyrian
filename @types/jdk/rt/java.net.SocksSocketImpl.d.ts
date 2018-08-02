declare namespace java {
    namespace net {
class SocksSocketImpl extends java.net.PlainSocketImpl implements java.net.SocksConsts {
    protected connect(arg0: java.net.SocketAddress, arg1: int): void
    protected socksBind(arg0: java.net.InetSocketAddress): void
    protected acceptFrom(arg0: java.net.SocketImpl, arg1: java.net.InetSocketAddress): void
    protected getInetAddress(): java.net.InetAddress
    protected getPort(): int
    protected getLocalPort(): int
    protected close(): void
    public static class: java.lang.Class<any>
}

    }
}