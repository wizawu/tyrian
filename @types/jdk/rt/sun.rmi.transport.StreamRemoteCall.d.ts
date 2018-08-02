declare namespace sun {
    namespace rmi {
        namespace transport {
class StreamRemoteCall implements java.rmi.server.RemoteCall {
    public constructor(arg0: sun.rmi.transport.Connection)
    public constructor(arg0: sun.rmi.transport.Connection, arg1: java.rmi.server.ObjID, arg2: int, arg3: long)
    public getConnection(): sun.rmi.transport.Connection
    public getOutputStream(): java.io.ObjectOutput
    public releaseOutputStream(): void
    public getInputStream(): java.io.ObjectInput
    public releaseInputStream(): void
    public discardPendingRefs(): void
    public getResultStream(arg0: boolean): java.io.ObjectOutput
    public executeCall(): void
    protected exceptionReceivedFromServer(arg0: java.lang.Exception): void
    public getServerException(): java.lang.Exception
    public done(): void
    public static class: java.lang.Class<any>
}

        }
    }
}