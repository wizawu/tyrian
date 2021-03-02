declare namespace java {
  namespace lang {

    class SecurityManager {
      public constructor()
      protected getClassContext(): java.lang.Class<unknown>[]
      public getSecurityContext(): java.lang.Object
      public checkPermission(arg0: java.security.Permission): void
      public checkPermission(arg0: java.security.Permission, arg1: java.lang.Object): void
      public checkCreateClassLoader(): void
      public checkAccess(arg0: java.lang.Thread): void
      public checkAccess(arg0: java.lang.ThreadGroup): void
      public checkExit(arg0: int): void
      public checkExec(arg0: java.lang.String): void
      public checkLink(arg0: java.lang.String): void
      public checkRead(arg0: java.io.FileDescriptor): void
      public checkRead(arg0: java.lang.String): void
      public checkRead(arg0: java.lang.String, arg1: java.lang.Object): void
      public checkWrite(arg0: java.io.FileDescriptor): void
      public checkWrite(arg0: java.lang.String): void
      public checkDelete(arg0: java.lang.String): void
      public checkConnect(arg0: java.lang.String, arg1: int): void
      public checkConnect(arg0: java.lang.String, arg1: int, arg2: java.lang.Object): void
      public checkListen(arg0: int): void
      public checkAccept(arg0: java.lang.String, arg1: int): void
      public checkMulticast(arg0: java.net.InetAddress): void
      public checkMulticast(arg0: java.net.InetAddress, arg1: byte): void
      public checkPropertiesAccess(): void
      public checkPropertyAccess(arg0: java.lang.String): void
      public checkPrintJobAccess(): void
      static addNonExportedPackages(arg0: java.lang.ModuleLayer): void
      static invalidatePackageAccessCache(): void
      public checkPackageAccess(arg0: java.lang.String): void
      public checkPackageDefinition(arg0: java.lang.String): void
      public checkSetFactory(): void
      public checkSecurityAccess(arg0: java.lang.String): void
      public getThreadGroup(): java.lang.ThreadGroup
    }

  }
}
