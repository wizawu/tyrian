declare namespace java {
    namespace awt {
        namespace datatransfer {
            class MimeType implements java.io.Externalizable , java.lang.Cloneable {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.awt.datatransfer.MimeTypeParameterList)
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public getPrimaryType(): string
                public getSubType(): string
                public getParameters(): java.awt.datatransfer.MimeTypeParameterList
                public getParameter(arg0: java.lang.String | string): string
                public setParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public removeParameter(arg0: java.lang.String | string): void
                public toString(): string
                public getBaseType(): string
                public match(arg0: java.awt.datatransfer.MimeType): boolean
                public match(arg0: java.lang.String | string): boolean
                public writeExternal(arg0: java.io.ObjectOutput): void
                public readExternal(arg0: java.io.ObjectInput): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}