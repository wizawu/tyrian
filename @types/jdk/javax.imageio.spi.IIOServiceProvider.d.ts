declare namespace javax {
  namespace imageio {
    namespace spi {

      abstract class IIOServiceProvider implements javax.imageio.spi.RegisterableService {
        protected vendorName: java.lang.String
        protected version: java.lang.String
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public constructor()
        public onRegistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<unknown>): void
        public onDeregistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<unknown>): void
        public getVendorName(): java.lang.String
        public getVersion(): java.lang.String
        public abstract getDescription(arg0: java.util.Locale): java.lang.String
      }

    }
  }
}
