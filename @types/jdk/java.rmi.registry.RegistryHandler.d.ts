declare namespace java {
  namespace rmi {
    namespace registry {
      interface RegistryHandler {
        registryStub(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.rmi.registry.Registry
        registryImpl(arg0: number | java.lang.Integer): java.rmi.registry.Registry
      }
    }
  }
}
