declare namespace javax {
  namespace net {
    namespace ssl {

      abstract class SSLSocketFactory extends javax.net.SocketFactory {
        static readonly DEBUG: boolean
        public constructor()
        public static getDefault(): javax.net.SocketFactory
        static getSecurityProperty(arg0: java.lang.String): java.lang.String
        public abstract getDefaultCipherSuites(): java.lang.String[]
        public abstract getSupportedCipherSuites(): java.lang.String[]
        public abstract createSocket(arg0: java.net.Socket, arg1: java.lang.String, arg2: int, arg3: boolean): java.net.Socket
        public createSocket(arg0: java.net.Socket, arg1: java.io.InputStream, arg2: boolean): java.net.Socket
      }

    }
  }
}
