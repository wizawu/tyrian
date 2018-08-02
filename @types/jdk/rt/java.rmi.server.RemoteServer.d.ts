declare namespace java {
    namespace rmi {
        namespace server {
abstract class RemoteServer extends java.rmi.server.RemoteObject {
    protected constructor()
    protected constructor(arg0: java.rmi.server.RemoteRef)
    public static getClientHost(): string
    public static setLog(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public static getLog(): java.io.PrintStream
    public static class: java.lang.Class<any>
}

        }
    }
}