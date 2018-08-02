declare namespace sun {
    namespace management {
        class ClassLoadingImpl implements java.lang.management.ClassLoadingMXBean {
            public getTotalLoadedClassCount(): long
            public getLoadedClassCount(): int
            public getUnloadedClassCount(): long
            public isVerbose(): boolean
            public setVerbose(arg0: boolean): void
            public getObjectName(): javax.management.ObjectName
            public static class: java.lang.Class<any>
        }
    }
}