declare namespace java {
    namespace lang {
        namespace instrument {
interface ClassFileTransformer {
    transform(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
}

interface ClassFileTransformer$$Lambda {
    (arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: java.security.ProtectionDomain, arg4: byte[]): byte[]
}

        }
    }
}