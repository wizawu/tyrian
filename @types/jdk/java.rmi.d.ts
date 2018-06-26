declare namespace com {
    namespace sun {
        namespace rmi {
            namespace rmid {
                class ExecOptionPermission extends java.security.Permission {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public implies(arg0: java.security.Permission): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getActions(): string
                    public newPermissionCollection(): java.security.PermissionCollection
                    public static class: java.lang.Class<any>
                }
                class ExecPermission extends java.security.Permission {
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public implies(arg0: java.security.Permission): boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getActions(): string
                    public newPermissionCollection(): java.security.PermissionCollection
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace java {
    namespace rmi {
        class AccessException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class AlreadyBoundException extends java.lang.Exception {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class ConnectException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class ConnectIOException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class MarshalException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class MarshalledObject<T> implements java.io.Serializable {
            public constructor(arg0: T)
            public get(): T
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
        class Naming {
            public static lookup(arg0: java.lang.String | string): java.rmi.Remote
            public static bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
            public static unbind(arg0: java.lang.String | string): void
            public static rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
            public static list(arg0: java.lang.String | string): java.lang.String[]
            public static class: java.lang.Class<any>
        }
        class NoSuchObjectException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class NotBoundException extends java.lang.Exception {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class RMISecurityException extends java.lang.SecurityException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class RMISecurityManager extends java.lang.SecurityManager {
            public constructor()
            public static class: java.lang.Class<any>
        }
        interface Remote {
        }
        class RemoteException extends java.io.IOException {
            public detail: java.lang.Throwable
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public getMessage(): string
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
        class ServerError extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Error)
            public static class: java.lang.Class<any>
        }
        class ServerException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class ServerRuntimeException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class StubNotFoundException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class UnexpectedException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class UnknownHostException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        class UnmarshalException extends java.rmi.RemoteException {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
            public static class: java.lang.Class<any>
        }
        namespace activation {
            abstract class Activatable extends java.rmi.server.RemoteServer {
                protected constructor(arg0: java.lang.String | string, arg1: java.rmi.MarshalledObject<any>, arg2: boolean, arg3: int)
                protected constructor(arg0: java.lang.String | string, arg1: java.rmi.MarshalledObject<any>, arg2: boolean, arg3: int, arg4: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg5: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                protected constructor(arg0: java.rmi.activation.ActivationID, arg1: int)
                protected constructor(arg0: java.rmi.activation.ActivationID, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                protected getID(): java.rmi.activation.ActivationID
                public static register(arg0: java.rmi.activation.ActivationDesc): java.rmi.Remote
                public static inactive(arg0: java.rmi.activation.ActivationID): boolean
                public static unregister(arg0: java.rmi.activation.ActivationID): void
                public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>, arg3: boolean, arg4: int): java.rmi.activation.ActivationID
                public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>, arg3: boolean, arg4: int, arg5: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg6: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): java.rmi.activation.ActivationID
                public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: int): java.rmi.Remote
                public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: int, arg3: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg4: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): java.rmi.Remote
                public static unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
                public static class: java.lang.Class<any>
            }
            class ActivateFailedException extends java.rmi.RemoteException {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                public static class: java.lang.Class<any>
            }
            class ActivationDesc implements java.io.Serializable {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>, arg3: boolean)
                public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.rmi.MarshalledObject<any>)
                public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.rmi.MarshalledObject<any>, arg4: boolean)
                public getGroupID(): java.rmi.activation.ActivationGroupID
                public getClassName(): string
                public getLocation(): string
                public getData(): java.rmi.MarshalledObject<any>
                public getRestartMode(): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class ActivationException extends java.lang.Exception {
                public detail: java.lang.Throwable
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
                public getMessage(): string
                public getCause(): java.lang.Throwable
                public static class: java.lang.Class<any>
            }
            abstract class ActivationGroup extends java.rmi.server.UnicastRemoteObject implements java.rmi.activation.ActivationInstantiator {
                protected constructor(arg0: java.rmi.activation.ActivationGroupID)
                public inactiveObject(arg0: java.rmi.activation.ActivationID): boolean
                public activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.Remote): void
                public static createGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationGroupDesc, arg2: long): java.rmi.activation.ActivationGroup
                public static currentGroupID(): java.rmi.activation.ActivationGroupID
                public static setSystem(arg0: java.rmi.activation.ActivationSystem): void
                public static getSystem(): java.rmi.activation.ActivationSystem
                protected activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.MarshalledObject<java.rmi.Remote>): void
                protected inactiveGroup(): void
                public static class: java.lang.Class<any>
            }
            class ActivationGroupDesc implements java.io.Serializable {
                public constructor(arg0: java.util.Properties, arg1: java.rmi.activation.ActivationGroupDesc$CommandEnvironment)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<any>, arg3: java.util.Properties, arg4: java.rmi.activation.ActivationGroupDesc$CommandEnvironment)
                public getClassName(): string
                public getLocation(): string
                public getData(): java.rmi.MarshalledObject<any>
                public getPropertyOverrides(): java.util.Properties
                public getCommandEnvironment(): java.rmi.activation.ActivationGroupDesc$CommandEnvironment
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class ActivationGroupID implements java.io.Serializable {
                public constructor(arg0: java.rmi.activation.ActivationSystem)
                public getSystem(): java.rmi.activation.ActivationSystem
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class ActivationID implements java.io.Serializable {
                public constructor(arg0: java.rmi.activation.Activator)
                public activate(arg0: boolean): java.rmi.Remote
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            interface ActivationInstantiator extends java.rmi.Remote {
                newInstance(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject<java.rmi.Remote>
            }
            interface ActivationMonitor extends java.rmi.Remote {
                inactiveObject(arg0: java.rmi.activation.ActivationID): void
                activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.MarshalledObject<java.rmi.Remote>): void
                inactiveGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: long): void
            }
            interface ActivationSystem extends java.rmi.Remote {
                SYSTEM_PORT: int
                registerObject(arg0: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationID
                unregisterObject(arg0: java.rmi.activation.ActivationID): void
                registerGroup(arg0: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupID
                activeGroup(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationInstantiator, arg2: long): java.rmi.activation.ActivationMonitor
                unregisterGroup(arg0: java.rmi.activation.ActivationGroupID): void
                shutdown(): void
                setActivationDesc(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.activation.ActivationDesc
                setActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.activation.ActivationGroupDesc): java.rmi.activation.ActivationGroupDesc
                getActivationDesc(arg0: java.rmi.activation.ActivationID): java.rmi.activation.ActivationDesc
                getActivationGroupDesc(arg0: java.rmi.activation.ActivationGroupID): java.rmi.activation.ActivationGroupDesc
            }
            interface Activator extends java.rmi.Remote {
                activate(arg0: java.rmi.activation.ActivationID, arg1: boolean): java.rmi.MarshalledObject<java.rmi.Remote>
            }
            class UnknownGroupException extends java.rmi.activation.ActivationException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class UnknownObjectException extends java.rmi.activation.ActivationException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
        }
        namespace dgc {
            interface DGC extends java.rmi.Remote {
                dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
                clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
            }
            class Lease implements java.io.Serializable {
                public constructor(arg0: java.rmi.dgc.VMID, arg1: long)
                public getVMID(): java.rmi.dgc.VMID
                public getValue(): long
                public static class: java.lang.Class<any>
            }
            class VMID implements java.io.Serializable {
                public constructor()
                public static isUnique(): boolean
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
        namespace registry {
            class LocateRegistry {
                public static getRegistry(): java.rmi.registry.Registry
                public static getRegistry(arg0: int): java.rmi.registry.Registry
                public static getRegistry(arg0: java.lang.String | string): java.rmi.registry.Registry
                public static getRegistry(arg0: java.lang.String | string, arg1: int): java.rmi.registry.Registry
                public static getRegistry(arg0: java.lang.String | string, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda): java.rmi.registry.Registry
                public static createRegistry(arg0: int): java.rmi.registry.Registry
                public static createRegistry(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): java.rmi.registry.Registry
                public static class: java.lang.Class<any>
            }
            interface Registry extends java.rmi.Remote {
                REGISTRY_PORT: int
                lookup(arg0: java.lang.String | string): java.rmi.Remote
                bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                unbind(arg0: java.lang.String | string): void
                rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                list(): java.lang.String[]
            }
            interface RegistryHandler {
                registryStub(arg0: java.lang.String | string, arg1: int): java.rmi.registry.Registry
                registryImpl(arg0: int): java.rmi.registry.Registry
            }
        }
        namespace server {
            class ExportException extends java.rmi.RemoteException {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                public static class: java.lang.Class<any>
            }
            interface LoaderHandler {
                packagePrefix: string
                loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                loadClass(arg0: java.net.URL, arg1: java.lang.String | string): java.lang.Class<any>
                getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
            }
            class LogStream extends java.io.PrintStream {
                public static SILENT: int
                public static BRIEF: int
                public static VERBOSE: int
                public static log(arg0: java.lang.String | string): java.rmi.server.LogStream
                public static getDefaultStream(): java.io.PrintStream
                public static setDefaultStream(arg0: java.io.PrintStream): void
                public getOutputStream(): java.io.OutputStream
                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public write(arg0: int): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public toString(): string
                public static parseLevel(arg0: java.lang.String | string): int
                public static class: java.lang.Class<any>
            }
            class ObjID implements java.io.Serializable {
                public static REGISTRY_ID: int
                public static ACTIVATOR_ID: int
                public static DGC_ID: int
                public constructor()
                public constructor(arg0: int)
                public write(arg0: java.io.ObjectOutput): void
                public static read(arg0: java.io.ObjectInput): java.rmi.server.ObjID
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class Operation {
                public constructor(arg0: java.lang.String | string)
                public getOperation(): string
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class RMIClassLoader {
                public static loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.net.URL, arg1: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<any>
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
                public static getClassAnnotation(arg0: java.lang.Class<any>): string
                public static getDefaultProviderInstance(): java.rmi.server.RMIClassLoaderSpi
                public static getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
                public static class: java.lang.Class<any>
            }
            abstract class RMIClassLoaderSpi {
                public constructor()
                public loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
                public loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
                public getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
                public getClassAnnotation(arg0: java.lang.Class<any>): string
                public static class: java.lang.Class<any>
            }
            interface RMIClientSocketFactory {
                createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
            }
            interface RMIClientSocketFactory$$Lambda {
                (arg0: java.lang.String | string, arg1: int): java.net.Socket
            }
            interface RMIFailureHandler {
                failure(arg0: java.lang.Exception): boolean
            }
            interface RMIFailureHandler$$Lambda {
                (arg0: java.lang.Exception): boolean
            }
            interface RMIServerSocketFactory {
                createServerSocket(arg0: int): java.net.ServerSocket
            }
            interface RMIServerSocketFactory$$Lambda {
                (arg0: int): java.net.ServerSocket
            }
            abstract class RMISocketFactory implements java.rmi.server.RMIClientSocketFactory , java.rmi.server.RMIServerSocketFactory {
                public constructor()
                public createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
                public createServerSocket(arg0: int): java.net.ServerSocket
                public static setSocketFactory(arg0: java.rmi.server.RMISocketFactory | java.rmi.server.RMISocketFactory$$Lambda): void
                public static getSocketFactory(): java.rmi.server.RMISocketFactory
                public static getDefaultSocketFactory(): java.rmi.server.RMISocketFactory
                public static setFailureHandler(arg0: java.rmi.server.RMIFailureHandler | java.rmi.server.RMIFailureHandler$$Lambda): void
                public static getFailureHandler(): java.rmi.server.RMIFailureHandler
                public static class: java.lang.Class<any>
            }
            abstract class RMISocketFactory$$Lambda implements java.rmi.server.RMIClientSocketFactory , java.rmi.server.RMIServerSocketFactory {
                public constructor()
            }
            interface RemoteCall {
                getOutputStream(): java.io.ObjectOutput
                releaseOutputStream(): void
                getInputStream(): java.io.ObjectInput
                releaseInputStream(): void
                getResultStream(arg0: boolean): java.io.ObjectOutput
                executeCall(): void
                done(): void
            }
            abstract class RemoteObject implements java.rmi.Remote , java.io.Serializable {
                protected ref: java.rmi.server.RemoteRef
                protected constructor()
                protected constructor(arg0: java.rmi.server.RemoteRef)
                public getRef(): java.rmi.server.RemoteRef
                public static toStub(arg0: java.rmi.Remote): java.rmi.Remote
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class RemoteObjectInvocationHandler extends java.rmi.server.RemoteObject implements java.lang.reflect.InvocationHandler {
                public constructor(arg0: java.rmi.server.RemoteRef)
                public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class RemoteObjectInvocationHandler$$Lambda extends java.rmi.server.RemoteObject implements java.lang.reflect.InvocationHandler {
                public constructor(arg0: java.rmi.server.RemoteRef)
            }
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
            abstract class RemoteServer extends java.rmi.server.RemoteObject {
                protected constructor()
                protected constructor(arg0: java.rmi.server.RemoteRef)
                public static getClientHost(): string
                public static setLog(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public static getLog(): java.io.PrintStream
                public static class: java.lang.Class<any>
            }
            abstract class RemoteStub extends java.rmi.server.RemoteObject {
                protected constructor()
                protected constructor(arg0: java.rmi.server.RemoteRef)
                protected static setRef(arg0: java.rmi.server.RemoteStub, arg1: java.rmi.server.RemoteRef): void
                public static class: java.lang.Class<any>
            }
            class ServerCloneException extends java.lang.CloneNotSupportedException {
                public detail: java.lang.Exception
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                public getMessage(): string
                public getCause(): java.lang.Throwable
                public static class: java.lang.Class<any>
            }
            class ServerNotActiveException extends java.lang.Exception {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            interface ServerRef extends java.rmi.server.RemoteRef {
                serialVersionUID: long
                exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object): java.rmi.server.RemoteStub
                getClientHost(): string
            }
            interface Skeleton {
                dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall, arg2: int, arg3: long): void
                getOperations(): java.rmi.server.Operation[]
            }
            class SkeletonMismatchException extends java.rmi.RemoteException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class SkeletonNotFoundException extends java.rmi.RemoteException {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                public static class: java.lang.Class<any>
            }
            class SocketSecurityException extends java.rmi.server.ExportException {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                public static class: java.lang.Class<any>
            }
            class UID implements java.io.Serializable {
                public constructor()
                public constructor(arg0: short)
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public write(arg0: java.io.DataOutput): void
                public static read(arg0: java.io.DataInput): java.rmi.server.UID
                public static class: java.lang.Class<any>
            }
            class UnicastRemoteObject extends java.rmi.server.RemoteServer {
                protected constructor()
                protected constructor(arg0: int)
                protected constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public clone(): java.lang.Object
                public static exportObject(arg0: java.rmi.Remote): java.rmi.server.RemoteStub
                public static exportObject(arg0: java.rmi.Remote, arg1: int): java.rmi.Remote
                public static exportObject(arg0: java.rmi.Remote, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): java.rmi.Remote
                public static unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
                public static class: java.lang.Class<any>
            }
            interface Unreferenced {
                unreferenced(): void
            }
            interface Unreferenced$$Lambda {
                (): void
            }
        }
    }
}
declare namespace javax {
    namespace rmi {
        namespace ssl {
            class SslRMIClientSocketFactory implements java.rmi.server.RMIClientSocketFactory , java.io.Serializable {
                public constructor()
                public createSocket(arg0: java.lang.String | string, arg1: int): java.net.Socket
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class SslRMIServerSocketFactory implements java.rmi.server.RMIServerSocketFactory {
                public constructor()
                public constructor(arg0: java.lang.String[], arg1: java.lang.String[], arg2: boolean)
                public constructor(arg0: javax.net.ssl.SSLContext, arg1: java.lang.String[], arg2: java.lang.String[], arg3: boolean)
                public getEnabledCipherSuites(): java.lang.String[]
                public getEnabledProtocols(): java.lang.String[]
                public getNeedClientAuth(): boolean
                public createServerSocket(arg0: int): java.net.ServerSocket
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class SslRMIServerSocketFactory$$Lambda implements java.rmi.server.RMIServerSocketFactory {
                public constructor()
            }
        }
    }
}
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
            class LogInputStream extends java.io.InputStream {
                public constructor(arg0: java.io.InputStream, arg1: int)
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public available(): int
                public close(): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
            class LogOutputStream extends java.io.OutputStream {
                public constructor(arg0: java.io.RandomAccessFile)
                public write(arg0: int): void
                public write(arg0: byte[]): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
            class ReliableLog {
                public static PreferredMajorVersion: int
                public static PreferredMinorVersion: int
                public constructor(arg0: java.lang.String | string, arg1: sun.rmi.log.LogHandler, arg2: boolean)
                public constructor(arg0: java.lang.String | string, arg1: sun.rmi.log.LogHandler)
                public recover(): java.lang.Object
                public update(arg0: java.lang.Object): void
                public update(arg0: java.lang.Object, arg1: boolean): void
                public snapshot(arg0: java.lang.Object): void
                public close(): void
                public snapshotSize(): long
                public logSize(): long
                public static class: java.lang.Class<any>
            }
        }
        namespace registry {
            class RegistryImpl extends java.rmi.server.RemoteServer implements java.rmi.registry.Registry {
                public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg3: sun.misc.ObjectInputFilter)
                public constructor(arg0: int)
                public lookup(arg0: java.lang.String | string): java.rmi.Remote
                public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public unbind(arg0: java.lang.String | string): void
                public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public list(): java.lang.String[]
                public static checkAccess(arg0: java.lang.String | string): void
                public static getID(): java.rmi.server.ObjID
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class RegistryImpl_Skel implements java.rmi.server.Skeleton {
                public constructor()
                public getOperations(): java.rmi.server.Operation[]
                public dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall, arg2: int, arg3: long): void
                public static class: java.lang.Class<any>
            }
            class RegistryImpl_Stub extends java.rmi.server.RemoteStub implements java.rmi.registry.Registry , java.rmi.Remote {
                public constructor()
                public constructor(arg0: java.rmi.server.RemoteRef)
                public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public list(): java.lang.String[]
                public lookup(arg0: java.lang.String | string): java.rmi.Remote
                public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public unbind(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
        namespace runtime {
            abstract class Log {
                public static BRIEF: java.util.logging.Level
                public static VERBOSE: java.util.logging.Level
                public constructor()
                public isLoggable(arg0: java.util.logging.Level): boolean
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string): void
                public log(arg0: java.util.logging.Level, arg1: java.lang.String | string, arg2: java.lang.Throwable): void
                public setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                public getPrintStream(): java.io.PrintStream
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): sun.rmi.runtime.Log
                public static getLog(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): sun.rmi.runtime.Log
                public static class: java.lang.Class<any>
            }
            class NewThreadAction implements java.security.PrivilegedAction<java.lang.Thread> {
                public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.String | string, arg2: boolean)
                public constructor(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.lang.String | string, arg2: boolean, arg3: boolean)
                public run(): java.lang.Thread
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class RuntimeUtil {
                public getScheduler(): java.util.concurrent.ScheduledThreadPoolExecutor
                public static class: java.lang.Class<any>
            }
        }
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
            class ActivatableServerRef extends sun.rmi.server.UnicastServerRef2 {
                public constructor(arg0: java.rmi.activation.ActivationID, arg1: int)
                public constructor(arg0: java.rmi.activation.ActivationID, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public getRefClass(arg0: java.io.ObjectOutput): string
                protected getClientRef(): java.rmi.server.RemoteRef
                public writeExternal(arg0: java.io.ObjectOutput): void
                public static class: java.lang.Class<any>
            }
            class Activation implements java.io.Serializable {
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class ActivationGroupImpl extends java.rmi.activation.ActivationGroup {
                public constructor(arg0: java.rmi.activation.ActivationGroupID, arg1: java.rmi.MarshalledObject<any>)
                public newInstance(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject<java.rmi.Remote>
                public inactiveObject(arg0: java.rmi.activation.ActivationID): boolean
                public activeObject(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.Remote): void
                public static class: java.lang.Class<any>
            }
            abstract class ActivationGroupInit {
                public constructor()
                public static main(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            interface DeserializationChecker {
                check(arg0: java.lang.reflect.Method, arg1: java.io.ObjectStreamClass, arg2: int, arg3: int): void
                checkProxyClass(arg0: java.lang.reflect.Method, arg1: java.lang.String[], arg2: int, arg3: int): void
                end(arg0: int): void
            }
            interface Dispatcher {
                dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall): void
            }
            interface Dispatcher$$Lambda {
                (arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall): void
            }
            class InactiveGroupException extends java.rmi.activation.ActivationException {
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class LoaderHandler {
                public static loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static getClassAnnotation(arg0: java.lang.Class<any>): string
                public static getClassLoader(arg0: java.lang.String | string): java.lang.ClassLoader
                public static getSecurityContext(arg0: java.lang.ClassLoader): java.lang.Object
                public static registerCodebaseLoader(arg0: java.lang.ClassLoader): void
                public static loadProxyClass(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.ClassLoader): java.lang.Class<any>
                public static class: java.lang.Class<any>
            }
            class MarshalInputStream extends java.io.ObjectInputStream {
                protected static permittedSunClasses: java.util.Map<java.lang.String, java.lang.Class<any>>
                public constructor(arg0: java.io.InputStream)
                public getDoneCallback(arg0: java.lang.Object): java.lang.Runnable
                public setDoneCallback(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public done(): void
                public close(): void
                protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
                protected resolveProxyClass(arg0: java.lang.String[]): java.lang.Class<any>
                protected readLocation(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class MarshalOutputStream extends java.io.ObjectOutputStream {
                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: int)
                protected replaceObject(arg0: java.lang.Object): java.lang.Object
                protected annotateClass(arg0: java.lang.Class<any>): void
                protected annotateProxyClass(arg0: java.lang.Class<any>): void
                protected writeLocation(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
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
            class UnicastRef2 extends sun.rmi.server.UnicastRef {
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public getRefClass(arg0: java.io.ObjectOutput): string
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public static class: java.lang.Class<any>
            }
            class UnicastServerRef extends sun.rmi.server.UnicastRef implements java.rmi.server.ServerRef , sun.rmi.server.Dispatcher {
                public static logCalls: boolean
                public static callLog: sun.rmi.runtime.Log
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public constructor(arg0: sun.rmi.transport.LiveRef, arg1: sun.misc.ObjectInputFilter)
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
            class UnicastServerRef$$Lambda extends sun.rmi.server.UnicastRef implements java.rmi.server.ServerRef , sun.rmi.server.Dispatcher {
                public static logCalls: boolean
            }
            class UnicastServerRef2 extends sun.rmi.server.UnicastServerRef {
                public constructor()
                public constructor(arg0: sun.rmi.transport.LiveRef)
                public constructor(arg0: sun.rmi.transport.LiveRef, arg1: sun.misc.ObjectInputFilter)
                public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg3: sun.misc.ObjectInputFilter)
                public getRefClass(arg0: java.io.ObjectOutput): string
                protected getClientRef(): java.rmi.server.RemoteRef
                public static class: java.lang.Class<any>
            }
            class Util {
                public static serverRefLog: sun.rmi.runtime.Log
                public static createProxy(arg0: java.lang.Class<any>, arg1: java.rmi.server.RemoteRef, arg2: boolean): java.rmi.Remote
                public static computeMethodHash(arg0: java.lang.reflect.Method): long
                public static getUnqualifiedName(arg0: java.lang.Class<any>): string
                public static class: java.lang.Class<any>
            }
            abstract class WeakClassHashMap<V> {
                protected constructor()
                public get(arg0: java.lang.Class<any>): V
                protected computeValue(arg0: java.lang.Class<any>): V
                public static class: java.lang.Class<any>
            }
        }
        namespace transport {
            interface Channel {
                newConnection(): sun.rmi.transport.Connection
                getEndpoint(): sun.rmi.transport.Endpoint
                free(arg0: sun.rmi.transport.Connection, arg1: boolean): void
            }
            interface Connection {
                getInputStream(): java.io.InputStream
                releaseInputStream(): void
                getOutputStream(): java.io.OutputStream
                releaseOutputStream(): void
                isReusable(): boolean
                close(): void
                getChannel(): sun.rmi.transport.Channel
            }
            class ConnectionInputStream extends sun.rmi.server.MarshalInputStream {
                public static class: java.lang.Class<any>
            }
            class ConnectionOutputStream extends sun.rmi.server.MarshalOutputStream {
                public static class: java.lang.Class<any>
            }
            class DGCAckHandler {
                public static received(arg0: java.rmi.server.UID): void
                public static class: java.lang.Class<any>
            }
            class DGCClient {
                public static class: java.lang.Class<any>
            }
            class DGCImpl implements java.rmi.dgc.DGC {
                public dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
                public clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
                public static class: java.lang.Class<any>
            }
            class DGCImpl_Skel implements java.rmi.server.Skeleton {
                public constructor()
                public getOperations(): java.rmi.server.Operation[]
                public dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall, arg2: int, arg3: long): void
                public static class: java.lang.Class<any>
            }
            class DGCImpl_Stub extends java.rmi.server.RemoteStub implements java.rmi.dgc.DGC {
                public constructor()
                public constructor(arg0: java.rmi.server.RemoteRef)
                public clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
                public dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
                public static class: java.lang.Class<any>
            }
            interface Endpoint {
                getChannel(): sun.rmi.transport.Channel
                exportObject(arg0: sun.rmi.transport.Target): void
                getInboundTransport(): sun.rmi.transport.Transport
                getOutboundTransport(): sun.rmi.transport.Transport
            }
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
            class ObjectEndpoint {
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class ObjectTable {
                public static getTarget(arg0: java.rmi.Remote): sun.rmi.transport.Target
                public static getStub(arg0: java.rmi.Remote): java.rmi.Remote
                public static unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
                public static class: java.lang.Class<any>
            }
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
            class Target {
                public constructor(arg0: java.rmi.Remote, arg1: sun.rmi.server.Dispatcher | sun.rmi.server.Dispatcher$$Lambda, arg2: java.rmi.Remote, arg3: java.rmi.server.ObjID, arg4: boolean)
                public getStub(): java.rmi.Remote
                public vmidDead(arg0: java.rmi.dgc.VMID): void
                public static class: java.lang.Class<any>
            }
            abstract class Transport {
                public constructor()
                public getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.Channel
                public free(arg0: sun.rmi.transport.Endpoint): void
                public exportObject(arg0: sun.rmi.transport.Target): void
                protected targetUnexported(): void
                protected checkAcceptPermission(arg0: java.security.AccessControlContext): void
                public serviceCall(arg0: java.rmi.server.RemoteCall): boolean
                public static class: java.lang.Class<any>
            }
            class TransportConstants {
                public static Magic: int
                public static Version: short
                public static StreamProtocol: byte
                public static SingleOpProtocol: byte
                public static MultiplexProtocol: byte
                public static ProtocolAck: byte
                public static ProtocolNack: byte
                public static Call: byte
                public static Return: byte
                public static Ping: byte
                public static PingAck: byte
                public static DGCAck: byte
                public static NormalReturn: byte
                public static ExceptionalReturn: byte
                public constructor()
                public static class: java.lang.Class<any>
            }
            class WeakRef extends java.lang.ref.WeakReference<java.lang.Object> {
                public constructor(arg0: java.lang.Object)
                public constructor(arg0: java.lang.Object, arg1: java.lang.ref.ReferenceQueue<java.lang.Object>)
                public pin(): void
                public unpin(): void
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            namespace tcp {
                class TCPChannel implements sun.rmi.transport.Channel {
                    public getEndpoint(): sun.rmi.transport.Endpoint
                    public newConnection(): sun.rmi.transport.Connection
                    public free(arg0: sun.rmi.transport.Connection, arg1: boolean): void
                    public shedCache(): void
                    public static class: java.lang.Class<any>
                }
                class TCPConnection implements sun.rmi.transport.Connection {
                    public getOutputStream(): java.io.OutputStream
                    public releaseOutputStream(): void
                    public getInputStream(): java.io.InputStream
                    public releaseInputStream(): void
                    public isReusable(): boolean
                    public isDead(): boolean
                    public close(): void
                    public getChannel(): sun.rmi.transport.Channel
                    public static class: java.lang.Class<any>
                }
                class TCPEndpoint implements sun.rmi.transport.Endpoint {
                    public constructor(arg0: java.lang.String | string, arg1: int)
                    public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
                    public static getLocalEndpoint(arg0: int): sun.rmi.transport.tcp.TCPEndpoint
                    public static getLocalEndpoint(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda): sun.rmi.transport.tcp.TCPEndpoint
                    public getOutboundTransport(): sun.rmi.transport.Transport
                    public static shedConnectionCaches(): void
                    public exportObject(arg0: sun.rmi.transport.Target): void
                    public getChannel(): sun.rmi.transport.Channel
                    public getHost(): string
                    public getPort(): int
                    public getListenPort(): int
                    public getInboundTransport(): sun.rmi.transport.Transport
                    public getClientSocketFactory(): java.rmi.server.RMIClientSocketFactory
                    public getServerSocketFactory(): java.rmi.server.RMIServerSocketFactory
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public write(arg0: java.io.ObjectOutput): void
                    public static read(arg0: java.io.ObjectInput): sun.rmi.transport.tcp.TCPEndpoint
                    public writeHostPortFormat(arg0: java.io.DataOutput): void
                    public static readHostPortFormat(arg0: java.io.DataInput): sun.rmi.transport.tcp.TCPEndpoint
                    public static class: java.lang.Class<any>
                }
                class TCPTransport extends sun.rmi.transport.Transport {
                    public shedConnectionCaches(): void
                    public getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.tcp.TCPChannel
                    public free(arg0: sun.rmi.transport.Endpoint): void
                    public exportObject(arg0: sun.rmi.transport.Target): void
                    protected targetUnexported(): void
                    protected checkAcceptPermission(arg0: java.security.AccessControlContext): void
                    public static getClientHost(): string
                    public getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.Channel
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
