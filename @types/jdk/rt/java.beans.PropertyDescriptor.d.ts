declare namespace java {
    namespace beans {
class PropertyDescriptor extends java.beans.FeatureDescriptor {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method, arg2: java.lang.reflect.Method)
    public getPropertyType(): java.lang.Class<any>
    public getReadMethod(): java.lang.reflect.Method
    public setReadMethod(arg0: java.lang.reflect.Method): void
    public getWriteMethod(): java.lang.reflect.Method
    public setWriteMethod(arg0: java.lang.reflect.Method): void
    public isBound(): boolean
    public setBound(arg0: boolean): void
    public isConstrained(): boolean
    public setConstrained(arg0: boolean): void
    public setPropertyEditorClass(arg0: java.lang.Class<any>): void
    public getPropertyEditorClass(): java.lang.Class<any>
    public createPropertyEditor(arg0: java.lang.Object): java.beans.PropertyEditor
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}