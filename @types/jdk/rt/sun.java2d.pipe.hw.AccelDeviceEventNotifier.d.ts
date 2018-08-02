declare namespace sun {
    namespace java2d {
        namespace pipe {
            namespace hw {
                class AccelDeviceEventNotifier {
                    public static DEVICE_RESET: int
                    public static DEVICE_DISPOSED: int
                    public static eventOccured(arg0: int, arg1: int): void
                    public static addListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener, arg1: int): void
                    public static removeListener(arg0: sun.java2d.pipe.hw.AccelDeviceEventListener): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}