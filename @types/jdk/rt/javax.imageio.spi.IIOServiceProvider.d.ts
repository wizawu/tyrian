declare namespace javax {
    namespace imageio {
        namespace spi {
            abstract class IIOServiceProvider implements javax.imageio.spi.RegisterableService {
                protected vendorName: string
                protected version: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor()
                public onRegistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<any>): void
                public onDeregistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<any>): void
                public getVendorName(): string
                public getVersion(): string
                public abstract getDescription(arg0: java.util.Locale): string
                public static class: java.lang.Class<any>
            }
            interface IIOServiceProvider$$Lambda implements javax.imageio.spi.RegisterableService {
                (arg0: java.util.Locale): string
            }
        }
    }
}