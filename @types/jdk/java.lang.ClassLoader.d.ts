declare namespace java {
  namespace lang {

    abstract class ClassLoader {
      readonly assertionLock: java.lang.Object
      classAssertionStatus: java.util.Map<java.lang.String,java.lang.Boolean>
      static readonly $assertionsDisabled: boolean
      addClass(arg0: java.lang.Class<unknown>): void
      protected constructor(arg0: java.lang.String | string, arg1: java.lang.ClassLoader)
      protected constructor(arg0: java.lang.ClassLoader)
      protected constructor()
      public getName(): java.lang.String
      name(): java.lang.String
      public loadClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      protected loadClass(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): java.lang.Class<unknown>
      loadClass(arg0: java.lang.Module, arg1: java.lang.String | string): java.lang.Class<unknown>
      protected getClassLoadingLock(arg0: java.lang.String | string): java.lang.Object
      protected findClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      protected findClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<unknown>
      protected defineClass(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.Class<unknown>
      protected defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.lang.Class<unknown>
      protected defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.security.ProtectionDomain): java.lang.Class<unknown>
      protected defineClass(arg0: java.lang.String | string, arg1: java.nio.ByteBuffer, arg2: java.security.ProtectionDomain): java.lang.Class<unknown>
      static defineClass1(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: byte[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.security.ProtectionDomain, arg6: java.lang.String | string): java.lang.Class<unknown>
      static defineClass2(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.nio.ByteBuffer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: java.security.ProtectionDomain, arg6: java.lang.String | string): java.lang.Class<unknown>
      protected resolveClass(arg0: java.lang.Class<unknown>): void
      protected findSystemClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      findBootstrapClassOrNull(arg0: java.lang.String | string): java.lang.Class<unknown>
      protected findLoadedClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      protected setSigners(arg0: java.lang.Class<unknown>, arg1: java.lang.Object[]): void
      protected findResource(arg0: java.lang.String | string, arg1: java.lang.String | string): java.net.URL
      public getResource(arg0: java.lang.String | string): java.net.URL
      public getResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
      public resources(arg0: java.lang.String | string): java.util.stream.Stream<java.net.URL>
      protected findResource(arg0: java.lang.String | string): java.net.URL
      protected findResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
      protected static registerAsParallelCapable(): boolean
      public isRegisteredAsParallelCapable(): boolean
      public static getSystemResource(arg0: java.lang.String | string): java.net.URL
      public static getSystemResources(arg0: java.lang.String | string): java.util.Enumeration<java.net.URL>
      public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
      public static getSystemResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
      public getParent(): java.lang.ClassLoader
      public getUnnamedModule(): java.lang.Module
      public static getPlatformClassLoader(): java.lang.ClassLoader
      public static getSystemClassLoader(): java.lang.ClassLoader
      static getBuiltinPlatformClassLoader(): java.lang.ClassLoader
      static getBuiltinAppClassLoader(): java.lang.ClassLoader
      static initSystemClassLoader(): java.lang.ClassLoader
      static initLibraryPaths(): void
      isAncestor(arg0: java.lang.ClassLoader): boolean
      static getClassLoader(arg0: java.lang.Class<unknown>): java.lang.ClassLoader
      static checkClassLoaderPermission(arg0: java.lang.ClassLoader, arg1: java.lang.Class<unknown>): void
      definePackage(arg0: java.lang.Class<unknown>): java.lang.Package
      definePackage(arg0: java.lang.String | string, arg1: java.lang.Module): java.lang.Package
      protected definePackage(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: java.net.URL): java.lang.Package
      public getDefinedPackage(arg0: java.lang.String | string): java.lang.Package
      public getDefinedPackages(): java.lang.Package[]
      protected getPackage(arg0: java.lang.String | string): java.lang.Package
      protected getPackages(): java.lang.Package[]
      packages(): java.util.stream.Stream<java.lang.Package>
      protected findLibrary(arg0: java.lang.String | string): java.lang.String
      static loadLibrary(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean): void
      public setDefaultAssertionStatus(arg0: boolean | java.lang.Boolean): void
      public setPackageAssertionStatus(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      public setClassAssertionStatus(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      public clearAssertionStatus(): void
      desiredAssertionStatus(arg0: java.lang.String | string): boolean
      createOrGetClassLoaderValueMap(): java.util.concurrent.ConcurrentHashMap<unknown,unknown>
    }

  }
}
