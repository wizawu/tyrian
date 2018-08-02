declare namespace sun {
    namespace java2d {
        namespace pipe {
            namespace hw {
interface AccelGraphicsConfig extends sun.java2d.pipe.hw.BufferedContextProvider {
    createCompatibleVolatileImage(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.VolatileImage
    getContextCapabilities(): sun.java2d.pipe.hw.ContextCapabilities
    addDeviceEventListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener): void
    removeDeviceEventListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener): void
}

            }
        }
    }
}