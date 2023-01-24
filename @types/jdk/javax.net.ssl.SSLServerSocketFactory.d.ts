declare namespace javax {
  namespace net {
    namespace ssl {
      abstract class SSLServerSocketFactory extends javax.net.ServerSocketFactory {
        protected constructor()
        public static getDefault(): javax.net.ServerSocketFactory
        public abstract getDefaultCipherSuites(): java.lang.String[]
        public abstract getSupportedCipherSuites(): java.lang.String[]
      }
    }
  }
}
