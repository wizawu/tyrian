declare namespace javax {
    namespace net {
        namespace ssl {
abstract class SSLSocketFactory extends javax.net.SocketFactory {
    public constructor()
    public static getDefault(): javax.net.SocketFactory
    public getDefaultCipherSuites(): java.lang.String[]
    public getSupportedCipherSuites(): java.lang.String[]
    public createSocket(arg0: java.net.Socket, arg1: java.lang.String | string, arg2: int, arg3: boolean): java.net.Socket
    public createSocket(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: boolean): java.net.Socket
    public static class: java.lang.Class<any>
}

        }
    }
}