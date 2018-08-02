declare namespace sun {
    namespace instrument {
class InstrumentationImpl implements java.lang.instrument.Instrumentation {
    public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
    public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: boolean): void
    public removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
    public isModifiableClass(arg0: java.lang.Class<any>): boolean
    public isRetransformClassesSupported(): boolean
    public retransformClasses(...arg0: java.lang.Class<any>[]): void
    public isRedefineClassesSupported(): boolean
    public redefineClasses(...arg0: java.lang.instrument.ClassDefinition[]): void
    public getAllLoadedClasses(): java.lang.Class[]
    public getInitiatedClasses(arg0: java.lang.ClassLoader): java.lang.Class[]
    public getObjectSize(arg0: java.lang.Object): long
    public appendToBootstrapClassLoaderSearch(arg0: java.util.jar.JarFile): void
    public appendToSystemClassLoaderSearch(arg0: java.util.jar.JarFile): void
    public isNativeMethodPrefixSupported(): boolean
    public setNativeMethodPrefix(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

    }
}