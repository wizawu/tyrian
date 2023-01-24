declare namespace java {
  namespace lang {
    namespace instrument {
      interface Instrumentation {
        addTransformer(arg0: java.lang.instrument.ClassFileTransformer, arg1: boolean | java.lang.Boolean): void
        addTransformer(arg0: java.lang.instrument.ClassFileTransformer): void
        removeTransformer(arg0: java.lang.instrument.ClassFileTransformer): boolean
        isRetransformClassesSupported(): boolean
        retransformClasses(...vargs: java.lang.Class<unknown>[]): void
        isRedefineClassesSupported(): boolean
        redefineClasses(...vargs: java.lang.instrument.ClassDefinition[]): void
        isModifiableClass(arg0: java.lang.Class<unknown>): boolean
        getAllLoadedClasses(): java.lang.Class[]
        getInitiatedClasses(arg0: java.lang.ClassLoader): java.lang.Class[]
        getObjectSize(arg0: java.lang.Object | any): number
        appendToBootstrapClassLoaderSearch(arg0: java.util.jar.JarFile): void
        appendToSystemClassLoaderSearch(arg0: java.util.jar.JarFile): void
        isNativeMethodPrefixSupported(): boolean
        setNativeMethodPrefix(arg0: java.lang.instrument.ClassFileTransformer, arg1: java.lang.String | string): void
        redefineModule(
          arg0: java.lang.Module,
          arg1: java.util.Set<java.lang.Module>,
          arg2: java.util.Map<java.lang.String, java.util.Set<java.lang.Module>>,
          arg3: java.util.Map<java.lang.String, java.util.Set<java.lang.Module>>,
          arg4: java.util.Set<java.lang.Class<unknown>>,
          arg5: java.util.Map<java.lang.Class<unknown>, java.util.List<java.lang.Class<unknown>>>
        ): void
        isModifiableModule(arg0: java.lang.Module): boolean
      }
    }
  }
}
