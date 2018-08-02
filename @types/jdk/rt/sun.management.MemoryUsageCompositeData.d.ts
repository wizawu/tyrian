declare namespace sun {
    namespace management {
        class MemoryUsageCompositeData extends sun.management.LazyCompositeData {
            public getMemoryUsage(): java.lang.management.MemoryUsage
            public static toCompositeData(arg0: java.lang.management.MemoryUsage): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getInit(arg0: javax.management.openmbean.CompositeData): long
            public static getUsed(arg0: javax.management.openmbean.CompositeData): long
            public static getCommitted(arg0: javax.management.openmbean.CompositeData): long
            public static getMax(arg0: javax.management.openmbean.CompositeData): long
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
    }
}