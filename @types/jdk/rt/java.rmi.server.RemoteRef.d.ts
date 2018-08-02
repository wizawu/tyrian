declare namespace java {
    namespace rmi {
        namespace server {
            interface RemoteRef extends java.io.Externalizable {
                serialVersionUID: long
                packagePrefix: string
                invoke(arg0: java.rmi.Remote, arg1: java.lang.reflect.Method, arg2: java.lang.Object[], arg3: long): java.lang.Object
                newCall(arg0: java.rmi.server.RemoteObject, arg1: java.rmi.server.Operation[], arg2: int, arg3: long): java.rmi.server.RemoteCall
                invoke(arg0: java.rmi.server.RemoteCall): void
                done(arg0: java.rmi.server.RemoteCall): void
                getRefClass(arg0: java.io.ObjectOutput): string
                remoteHashCode(): int
                remoteEquals(arg0: java.rmi.server.RemoteRef): boolean
                remoteToString(): string
            }
        }
    }
}