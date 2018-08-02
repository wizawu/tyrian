declare namespace com {
    namespace sun {
        namespace beans {
            namespace editors {
class EnumEditor implements java.beans.PropertyEditor {
    public constructor(arg0: java.lang.Class)
    public getValue(): java.lang.Object
    public setValue(arg0: java.lang.Object): void
    public getAsText(): string
    public setAsText(arg0: java.lang.String | string): void
    public getTags(): java.lang.String[]
    public getJavaInitializationString(): string
    public isPaintable(): boolean
    public paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
    public supportsCustomEditor(): boolean
    public getCustomEditor(): java.awt.Component
    public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}