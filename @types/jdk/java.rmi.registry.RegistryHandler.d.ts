declare namespace java {
  namespace rmi {
    namespace registry {

      interface RegistryHandler {

        registryStub(arg0: java.lang.String, arg1: int): java.rmi.registry.Registry
        registryImpl(arg0: int): java.rmi.registry.Registry
      }

    }
  }
}
