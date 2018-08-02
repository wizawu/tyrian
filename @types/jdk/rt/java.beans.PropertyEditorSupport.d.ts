declare namespace java {
    namespace beans {
class PropertyEditorSupport implements java.beans.PropertyEditor {
    public constructor()
    public constructor(arg0: java.lang.Object)
    public getSource(): java.lang.Object
    public setSource(arg0: java.lang.Object): void
    public setValue(arg0: java.lang.Object): void
    public getValue(): java.lang.Object
    public isPaintable(): boolean
    public paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
    public getJavaInitializationString(): string
    public getAsText(): string
    public setAsText(arg0: java.lang.String | string): void
    public getTags(): java.lang.String[]
    public getCustomEditor(): java.awt.Component
    public supportsCustomEditor(): boolean
    public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public firePropertyChange(): void
    public static class: java.lang.Class<any>
}

    }
}