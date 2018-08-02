declare namespace sun {
    namespace misc {
        class ProxyGenerator$MethodInfo {
            public accessFlags: int
            public name: string
            public descriptor: string
            public maxStack: short
            public maxLocals: short
            public code: java.io.ByteArrayOutputStream
            public exceptionTable: java.util.List<sun.misc.ProxyGenerator$ExceptionTableEntry>
            public declaredExceptions: short[]
            public constructor(arg0: sun.misc.ProxyGenerator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int)
            public write(arg0: java.io.DataOutputStream): void
            public static class: java.lang.Class<any>
        }
    }
}