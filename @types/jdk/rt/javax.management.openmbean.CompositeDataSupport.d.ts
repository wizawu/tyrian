declare namespace javax {
    namespace management {
        namespace openmbean {
            class CompositeDataSupport implements javax.management.openmbean.CompositeData , java.io.Serializable {
                public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.lang.String[], arg2: java.lang.Object[])
                public constructor(arg0: javax.management.openmbean.CompositeType, arg1: java.util.Map<java.lang.String, any>)
                public getCompositeType(): javax.management.openmbean.CompositeType
                public get(arg0: java.lang.String | string): java.lang.Object
                public getAll(arg0: java.lang.String[]): java.lang.Object[]
                public containsKey(arg0: java.lang.String | string): boolean
                public containsValue(arg0: java.lang.Object): boolean
                public values(): java.util.Collection<any>
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}