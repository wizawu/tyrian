declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace wbmp {
                    class WBMPImageReaderSpi extends javax.imageio.spi.ImageReaderSpi {
                        public constructor()
                        public onRegistration(arg0: javax.imageio.spi.ServiceRegistry, arg1: java.lang.Class<any>): void
                        public getDescription(arg0: java.util.Locale): string
                        public canDecodeInput(arg0: java.lang.Object): boolean
                        public createReaderInstance(arg0: java.lang.Object): javax.imageio.ImageReader
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}