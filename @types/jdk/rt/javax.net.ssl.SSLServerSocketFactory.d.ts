declare namespace javax {
    namespace net {
        namespace ssl {
            abstract class SSLServerSocketFactory extends javax.net.ServerSocketFactory {
                protected constructor()
                public static getDefault(): javax.net.ServerSocketFactory
                public getDefaultCipherSuites(): java.lang.String[]
                public getSupportedCipherSuites(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}