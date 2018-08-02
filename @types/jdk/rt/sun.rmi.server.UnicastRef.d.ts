declare namespace sun {
    namespace rmi {
        namespace server {
            class UnicastRef implements java.rmi.server.RemoteRef {
                public static clientRefLog: sun.rmi.runtime.Log
                public static clientCallLog: sun.rmi.runtime.Log
                protected ref: sun.rmi.transport.LiveRef
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public getLiveRef(): sun.rmi.transport.LiveRef
                public invoke(arg0: java.rmi.Remote, arg1: java.lang.reflect.Method, arg2: java.lang.Object[], arg3: long): java.lang.Object
                protected marshalCustomCallData(arg0: java.io.ObjectOutput): void
                protected static marshalValue(arg0: java.lang.Class<any>, arg1: java.lang.Object, arg2: java.io.ObjectOutput): void
                protected static unmarshalValue(arg0: java.lang.Class<any>, arg1: java.io.ObjectInput): java.lang.Object
                public newCall(arg0: java.rmi.server.RemoteObject, arg1: java.rmi.server.Operation[], arg2: int, arg3: long): java.rmi.server.RemoteCall
                public invoke(arg0: java.rmi.server.RemoteCall): void
                public done(arg0: java.rmi.server.RemoteCall): void
                public getRefClass(arg0: java.io.ObjectOutput): string
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public remoteToString(): string
                public remoteHashCode(): int
                public remoteEquals(arg0: java.rmi.server.RemoteRef): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}