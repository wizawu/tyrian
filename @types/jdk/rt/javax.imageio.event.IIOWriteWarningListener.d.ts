declare namespace javax {
    namespace imageio {
        namespace event {
            interface IIOWriteWarningListener extends java.util.EventListener {
                warningOccurred(arg0: javax.imageio.ImageWriter, arg1: int, arg2: java.lang.String | string): void
            }
            interface IIOWriteWarningListener$$Lambda extends java.util.EventListener {
                (arg0: javax.imageio.ImageWriter, arg1: int, arg2: java.lang.String | string): void
            }
        }
    }
}