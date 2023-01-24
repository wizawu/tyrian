declare namespace javax {
  namespace imageio {
    namespace spi {
      interface RegisterableService {
        onRegistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<unknown>): void
        onDeregistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<unknown>): void
      }
    }
  }
}
