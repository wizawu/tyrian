declare namespace com {
    namespace sun {
        namespace beans {
            namespace editors {
                class ColorEditor extends java.awt.Panel implements java.beans.PropertyEditor {
                    public constructor()
                    public setValue(arg0: java.lang.Object): void
                    public preferredSize(): java.awt.Dimension
                    public keyUp(arg0: java.awt.Event, arg1: int): boolean
                    public setAsText(arg0: java.lang.String | string): void
                    public action(arg0: java.awt.Event, arg1: java.lang.Object): boolean
                    public getJavaInitializationString(): string
                    public getValue(): java.lang.Object
                    public isPaintable(): boolean
                    public paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
                    public getAsText(): string
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