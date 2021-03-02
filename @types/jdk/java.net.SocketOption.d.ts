declare namespace java {
  namespace net {

    interface SocketOption<T> {
      name(): java.lang.String
      type(): java.lang.Class<T>
    }

  }
}
