declare namespace sun {
    namespace management {
        class VMOptionCompositeData extends sun.management.LazyCompositeData {
            public getVMOption(): com.sun.management.VMOption
            public static toCompositeData(arg0: com.sun.management.VMOption): javax.management.openmbean.CompositeData
            protected getCompositeData(): javax.management.openmbean.CompositeData
            public static getName(arg0: javax.management.openmbean.CompositeData): string
            public static getValue(arg0: javax.management.openmbean.CompositeData): string
            public static getOrigin(arg0: javax.management.openmbean.CompositeData): com.sun.management.VMOption$Origin
            public static isWriteable(arg0: javax.management.openmbean.CompositeData): boolean
            public static validateCompositeData(arg0: javax.management.openmbean.CompositeData): void
            public static class: java.lang.Class<any>
        }
    }
}