declare namespace javax {
    namespace management {
        namespace openmbean {
            class CompositeType extends javax.management.openmbean.OpenType<javax.management.openmbean.CompositeData> {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[], arg3: java.lang.String[], arg4: javax.management.openmbean.OpenType<any>[])
                public containsKey(arg0: java.lang.String | string): boolean
                public getDescription(arg0: java.lang.String | string): string
                public getType(arg0: java.lang.String | string): javax.management.openmbean.OpenType<any>
                public keySet(): java.util.Set<java.lang.String>
                public isValue(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}