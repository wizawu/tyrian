declare namespace javax {
  namespace net {

    abstract class SocketFactory {

      protected constructor()
      public static getDefault(): javax.net.SocketFactory
      public createSocket(): java.net.Socket
      public abstract createSocket(arg0: java.lang.String, arg1: int): java.net.Socket
      public abstract createSocket(arg0: java.lang.String, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
      public abstract createSocket(arg0: java.net.InetAddress, arg1: int): java.net.Socket
      public abstract createSocket(arg0: java.net.InetAddress, arg1: int, arg2: java.net.InetAddress, arg3: int): java.net.Socket
    }

  }
}
