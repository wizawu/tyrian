declare namespace sun {
    namespace instrument {
class TransformerManager {
    public addTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): void
    public removeTransformer(arg0: java.lang.instrument.ClassFileTransformer | java.lang.instrument.ClassFileTransformer$$Lambda): boolean
    public transform(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
    public static class: java.lang.Class<any>
}

    }
}