declare namespace javax {
    namespace management {
        class ImmutableDescriptor implements javax.management.Descriptor {
            public static EMPTY_DESCRIPTOR: javax.management.ImmutableDescriptor
            public constructor(arg0: java.lang.String[], arg1: java.lang.Object[])
            public constructor(...arg0: java.lang.String[])
            public constructor(arg0: java.util.Map<java.lang.String, any>)
            public static union(...arg0: javax.management.Descriptor[]): javax.management.ImmutableDescriptor
            public getFieldValue(arg0: java.lang.String | string): java.lang.Object
            public getFields(): java.lang.String[]
            public getFieldValues(...arg0: java.lang.String[]): java.lang.Object[]
            public getFieldNames(): java.lang.String[]
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public isValid(): boolean
            public clone(): javax.management.Descriptor
            public setFields(arg0: java.lang.String[], arg1: java.lang.Object[]): void
            public setField(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public removeField(arg0: java.lang.String | string): void
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}