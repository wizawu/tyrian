declare namespace com {
    namespace sun {
        namespace management {
            class VMOption {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: com.sun.management.VMOption$Origin)
                public getName(): string
                public getValue(): string
                public getOrigin(): com.sun.management.VMOption$Origin
                public isWriteable(): boolean
                public toString(): string
                public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.VMOption
                public static class: java.lang.Class<any>
            }
        }
    }
}