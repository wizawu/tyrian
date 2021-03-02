declare namespace java {
  namespace lang {

    class SecurityManager {
      public constructor()
      protected getClassContext(): java.lang.Class<unknown>[]
      public getSecurityContext(): java.lang.Object
      public checkPermission(arg0: java.security.Permission): void
      public checkPermission(arg0: java.security.Permission, arg1: java.lang.Object | any): void
      public checkCreateClassLoader(): void
      public checkAccess(arg0: java.lang.Thread): void
      public checkAccess(arg0: java.lang.ThreadGroup): void
      public checkExit(arg0: number | java.lang.Integer): void
      public checkExec(arg0: java.lang.String | string): void
      public checkLink(arg0: java.lang.String | string): void
      public checkRead(arg0: java.io.FileDescriptor): void
      public checkRead(arg0: java.lang.String | string): void
      public checkRead(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public checkWrite(arg0: java.io.FileDescriptor): void
      public checkWrite(arg0: java.lang.String | string): void
      public checkDelete(arg0: java.lang.String | string): void
      public checkConnect(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public checkConnect(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.Object | any): void
      public checkListen(arg0: number | java.lang.Integer): void
      public checkAccept(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public checkMulticast(arg0: java.net.InetAddress): void
      public checkMulticast(arg0: java.net.InetAddress, arg1: number | java.lang.Byte): void
      public checkPropertiesAccess(): void
      public checkPropertyAccess(arg0: java.lang.String | string): void
      public checkPrintJobAccess(): void
      static addNonExportedPackages(arg0: java.lang.ModuleLayer): void
      static invalidatePackageAccessCache(): void
      public checkPackageAccess(arg0: java.lang.String | string): void
      public checkPackageDefinition(arg0: java.lang.String | string): void
      public checkSetFactory(): void
      public checkSecurityAccess(arg0: java.lang.String | string): void
      public getThreadGroup(): java.lang.ThreadGroup
    }

  }
}
