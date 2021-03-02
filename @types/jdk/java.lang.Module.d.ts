declare namespace java {
  namespace lang {

    class Module implements java.lang.reflect.AnnotatedElement {
      static readonly $assertionsDisabled: boolean
      constructor(arg0: java.lang.ModuleLayer, arg1: java.lang.ClassLoader, arg2: java.lang.module.ModuleDescriptor, arg3: java.net.URI)
      constructor(arg0: java.lang.ClassLoader)
      constructor(arg0: java.lang.ClassLoader, arg1: java.lang.module.ModuleDescriptor)
      public isNamed(): boolean
      public getName(): java.lang.String
      public getClassLoader(): java.lang.ClassLoader
      public getDescriptor(): java.lang.module.ModuleDescriptor
      public getLayer(): java.lang.ModuleLayer
      public canRead(arg0: java.lang.Module): boolean
      public addReads(arg0: java.lang.Module): java.lang.Module
      implAddReads(arg0: java.lang.Module): void
      implAddReadsAllUnnamed(): void
      implAddReadsNoSync(arg0: java.lang.Module): void
      public isExported(arg0: java.lang.String, arg1: java.lang.Module): boolean
      public isOpen(arg0: java.lang.String, arg1: java.lang.Module): boolean
      public isExported(arg0: java.lang.String): boolean
      public isOpen(arg0: java.lang.String): boolean
      isReflectivelyExported(arg0: java.lang.String, arg1: java.lang.Module): boolean
      isReflectivelyOpened(arg0: java.lang.String, arg1: java.lang.Module): boolean
      public addExports(arg0: java.lang.String, arg1: java.lang.Module): java.lang.Module
      public addOpens(arg0: java.lang.String, arg1: java.lang.Module): java.lang.Module
      implAddExports(arg0: java.lang.String): void
      implAddExports(arg0: java.lang.String, arg1: java.lang.Module): void
      implAddExportsToAllUnnamed(arg0: java.lang.String): void
      implAddExportsNoSync(arg0: java.lang.String): void
      implAddExportsNoSync(arg0: java.lang.String, arg1: java.lang.Module): void
      implAddOpens(arg0: java.lang.String): void
      implAddOpens(arg0: java.lang.String, arg1: java.lang.Module): void
      implAddOpensToAllUnnamed(arg0: java.lang.String): void
      implAddOpensToAllUnnamed(arg0: java.util.Iterator<java.lang.String>): void
      public addUses(arg0: java.lang.Class<unknown>): java.lang.Module
      implAddUses(arg0: java.lang.Class<unknown>): void
      public canUse(arg0: java.lang.Class<unknown>): boolean
      public getPackages(): java.util.Set<java.lang.String>
      static defineModules(arg0: java.lang.module.Configuration, arg1: java.util.function$.Function<java.lang.String,java.lang.ClassLoader>, arg2: java.lang.ModuleLayer): java.util.Map<java.lang.String,java.lang.Module>
      public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
      public getAnnotations(): java.lang.annotation.Annotation[]
      public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
      public getResourceAsStream(arg0: java.lang.String): java.io.InputStream
      public toString(): java.lang.String
    }

  }
}
