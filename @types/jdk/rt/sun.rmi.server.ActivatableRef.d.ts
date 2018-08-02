declare namespace sun {
    namespace rmi {
        namespace server {
            class ActivatableRef implements java.rmi.server.RemoteRef {
                protected id: java.rmi.activation.ActivationID
                protected ref: java.rmi.server.RemoteRef
                public constructor()
                public constructor(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.server.RemoteRef)
                public static getStub(arg0: java.rmi.activation.ActivationDesc, arg1: java.rmi.activation.ActivationID): java.rmi.Remote
                public invoke(arg0: java.rmi.Remote, arg1: java.lang.reflect.Method, arg2: java.lang.Object[], arg3: long): java.lang.Object
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