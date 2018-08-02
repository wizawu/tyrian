declare namespace java {
    namespace lang {
class SecurityManager {
    protected inCheck: boolean
    public getInCheck(): boolean
    public constructor()
    protected getClassContext(): java.lang.Class[]
    protected currentClassLoader(): java.lang.ClassLoader
    protected currentLoadedClass(): java.lang.Class<any>
    protected classDepth(arg0: java.lang.String | string): int
    protected classLoaderDepth(): int
    protected inClass(arg0: java.lang.String | string): boolean
    protected inClassLoader(): boolean
    public getSecurityContext(): java.lang.Object
    public checkPermission(arg0: java.security.Permission): void
    public checkPermission(arg0: java.security.Permission, arg1: java.lang.Object): void
    public checkCreateClassLoader(): void
    public checkAccess(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
    public checkAccess(arg0: java.lang.ThreadGroup | java.lang.ThreadGroup$$Lambda): void
    public checkExit(arg0: int): void
    public checkExec(arg0: java.lang.String | string): void
    public checkLink(arg0: java.lang.String | string): void
    public checkRead(arg0: java.io.FileDescriptor): void
    public checkRead(arg0: java.lang.String | string): void
    public checkRead(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public checkWrite(arg0: java.io.FileDescriptor): void
    public checkWrite(arg0: java.lang.String | string): void
    public checkDelete(arg0: java.lang.String | string): void
    public checkConnect(arg0: java.lang.String | string, arg1: int): void
    public checkConnect(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): void
    public checkListen(arg0: int): void
    public checkAccept(arg0: java.lang.String | string, arg1: int): void
    public checkMulticast(arg0: java.net.InetAddress): void
    public checkMulticast(arg0: java.net.InetAddress, arg1: byte): void
    public checkPropertiesAccess(): void
    public checkPropertyAccess(arg0: java.lang.String | string): void
    public checkTopLevelWindow(arg0: java.lang.Object): boolean
    public checkPrintJobAccess(): void
    public checkSystemClipboardAccess(): void
    public checkAwtEventQueueAccess(): void
    public checkPackageAccess(arg0: java.lang.String | string): void
    public checkPackageDefinition(arg0: java.lang.String | string): void
    public checkSetFactory(): void
    public checkMemberAccess(arg0: java.lang.Class<any>, arg1: int): void
    public checkSecurityAccess(arg0: java.lang.String | string): void
    public getThreadGroup(): java.lang.ThreadGroup
    public static class: java.lang.Class<any>
}

    }
}