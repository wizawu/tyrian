declare namespace sun {
    namespace rmi {
        namespace transport {
            class LiveRef implements java.lang.Cloneable {
                public constructor(arg0: java.rmi.server.ObjID, arg1: sun.rmi.transport.Endpoint, arg2: boolean)
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public constructor(arg0: java.rmi.server.ObjID, arg1: int)
                public constructor(arg0: java.rmi.server.ObjID, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public clone(): java.lang.Object
                public getPort(): int
                public getClientSocketFactory(): java.rmi.server.RMIClientSocketFactory
                public getServerSocketFactory(): java.rmi.server.RMIServerSocketFactory
                public exportObject(arg0: sun.rmi.transport.Target): void
                public getChannel(): sun.rmi.transport.Channel
                public getObjID(): java.rmi.server.ObjID
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public remoteEquals(arg0: java.lang.Object): boolean
                public write(arg0: java.io.ObjectOutput, arg1: boolean): void
                public static read(arg0: java.io.ObjectInput, arg1: boolean): sun.rmi.transport.LiveRef
                public static class: java.lang.Class<any>
            }
        }
    }
}