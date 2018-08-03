declare namespace java {
    namespace beans {
        interface PropertyEditor {
            setValue(arg0: java.lang.Object): void
            getValue(): java.lang.Object
            isPaintable(): boolean
            paintValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
            getJavaInitializationString(): string
            getAsText(): string
            setAsText(arg0: java.lang.String | string): void
            getTags(): java.lang.String[]
            getCustomEditor(): java.awt.Component
            supportsCustomEditor(): boolean
            addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
            removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
        }
    }
}