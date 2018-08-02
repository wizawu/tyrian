declare namespace com {
    namespace sun {
        namespace beans {
            namespace editors {
class FontEditor extends java.awt.Panel implements java.beans.PropertyEditor {
    public constructor()
    public preferredSize(): java.awt.Dimension
    public setValue(arg0: java.lang.Object): void
    public getValue(): java.lang.Object
    public getJavaInitializationString(): string
    public action(arg0: java.awt.Event, arg1: java.lang.Object): boolean
    public isPaintable(): boolean
    public paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
    public getAsText(): string
    public setAsText(arg0: java.lang.String | string): void
    public getTags(): java.lang.String[]
    public getCustomEditor(): java.awt.Component
    public supportsCustomEditor(): boolean
    public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}