declare namespace javax {
    namespace activation {
class MimeType implements java.io.Externalizable {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public getPrimaryType(): string
    public setPrimaryType(arg0: java.lang.String | string): void
    public getSubType(): string
    public setSubType(arg0: java.lang.String | string): void
    public getParameters(): javax.activation.MimeTypeParameterList
    public getParameter(arg0: java.lang.String | string): string
    public setParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public removeParameter(arg0: java.lang.String | string): void
    public toString(): string
    public getBaseType(): string
    public match(arg0: javax.activation.MimeType): boolean
    public match(arg0: java.lang.String | string): boolean
    public writeExternal(arg0: java.io.ObjectOutput): void
    public readExternal(arg0: java.io.ObjectInput): void
    public static class: java.lang.Class<any>
}

    }
}