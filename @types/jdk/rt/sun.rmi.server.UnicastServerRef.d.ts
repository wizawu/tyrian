declare namespace sun {
    namespace rmi {
        namespace server {
            class UnicastServerRef extends sun.rmi.server.UnicastRef implements java.rmi.server.ServerRef , sun.rmi.server.Dispatcher {
                public static readonly logCalls: boolean
                public static readonly callLog: sun.rmi.runtime.Log
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public constructor(arg0: sun.rmi.transport.LiveRef, arg1: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda)
                public constructor(arg0: int)
                public constructor(arg0: boolean)
                public exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object): java.rmi.server.RemoteStub
                public exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object, arg2: boolean): java.rmi.Remote
                public getClientHost(): string
                public setSkeleton(arg0: java.rmi.Remote): void
                public dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall): void
                protected unmarshalCustomCallData(arg0: java.io.ObjectInput): void
                public static clearStackTraces(arg0: java.lang.Throwable): void
                public getRefClass(arg0: java.io.ObjectOutput): string
                protected getClientRef(): java.rmi.server.RemoteRef
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public static class: java.lang.Class<any>
            }
        }
    }
}