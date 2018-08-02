declare namespace java {
    namespace lang {
        namespace instrument {
            interface Instrumentation {
                addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: boolean): void
                addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
                removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
                isRetransformClassesSupported(): boolean
                retransformClasses(...arg0: java.lang.Class<any>[]): void
                isRedefineClassesSupported(): boolean
                redefineClasses(...arg0: java.lang.instrument.ClassDefinition[]): void
                isModifiableClass(arg0: java.lang.Class<any>): boolean
                getAllLoadedClasses(): java.lang.Class[]
                getInitiatedClasses(arg0: java.lang.ClassLoader): java.lang.Class[]
                getObjectSize(arg0: java.lang.Object): long
                appendToBootstrapClassLoaderSearch(arg0: java.util.jar.JarFile): void
                appendToSystemClassLoaderSearch(arg0: java.util.jar.JarFile): void
                isNativeMethodPrefixSupported(): boolean
                setNativeMethodPrefix(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: java.lang.String | string): void
            }
        }
    }
}