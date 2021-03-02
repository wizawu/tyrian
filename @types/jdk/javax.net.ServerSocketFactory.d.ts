declare namespace javax {
  namespace net {

    abstract class ServerSocketFactory {
      protected constructor()
      public static getDefault(): javax.net.ServerSocketFactory
      public createServerSocket(): java.net.ServerSocket
      public abstract createServerSocket(arg0: number | java.lang.Integer): java.net.ServerSocket
      public abstract createServerSocket(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.net.ServerSocket
      public abstract createServerSocket(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.net.InetAddress): java.net.ServerSocket
    }

  }
}
