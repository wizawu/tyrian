declare namespace javax {
    namespace net {
abstract class ServerSocketFactory {
    protected constructor()
    public static getDefault(): javax.net.ServerSocketFactory
    public createServerSocket(): java.net.ServerSocket
    public createServerSocket(arg0: int): java.net.ServerSocket
    public createServerSocket(arg0: int, arg1: int): java.net.ServerSocket
    public createServerSocket(arg0: int, arg1: int, arg2: java.net.InetAddress): java.net.ServerSocket
    public static class: java.lang.Class<any>
}

    }
}