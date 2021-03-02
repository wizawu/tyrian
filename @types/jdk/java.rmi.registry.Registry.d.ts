declare namespace java {
  namespace rmi {
    namespace registry {

      interface Registry extends java.rmi.Remote {
        public static readonly REGISTRY_PORT: int
        lookup(arg0: java.lang.String): java.rmi.Remote
        bind(arg0: java.lang.String, arg1: java.rmi.Remote): void
        unbind(arg0: java.lang.String): void
        rebind(arg0: java.lang.String, arg1: java.rmi.Remote): void
        list(): java.lang.String[]
      }

    }
  }
}
