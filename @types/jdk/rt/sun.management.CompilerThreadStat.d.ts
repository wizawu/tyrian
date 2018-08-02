declare namespace sun {
    namespace management {
        class CompilerThreadStat implements java.io.Serializable {
            public getName(): string
            public getCompileTaskCount(): long
            public getCompileTime(): long
            public getLastCompiledMethodInfo(): sun.management.MethodInfo
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}