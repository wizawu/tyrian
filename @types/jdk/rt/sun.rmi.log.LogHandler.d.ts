declare namespace sun {
    namespace rmi {
        namespace log {
abstract class LogHandler {
    public constructor()
    public initialSnapshot(): java.lang.Object
    public snapshot(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.Object): void
    public recover(arg0: java.io.InputStream): java.lang.Object
    public writeUpdate(arg0: sun.rmi.log.LogOutputStream, arg1: java.lang.Object): void
    public readUpdate(arg0: sun.rmi.log.LogInputStream, arg1: java.lang.Object): java.lang.Object
    public applyUpdate(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}