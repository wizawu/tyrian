declare namespace javax {
    namespace swing {
abstract class ActionPropertyChangeListener<T extends javax.swing.JComponent> implements java.beans.PropertyChangeListener , java.io.Serializable {
    public constructor(arg0: T, arg1: javax.swing.Action)
    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
    protected actionPropertyChanged(arg0: T, arg1: javax.swing.Action, arg2: java.beans.PropertyChangeEvent): void
    public getTarget(): T
    public getAction(): javax.swing.Action
    public static class: java.lang.Class<any>
}

    }
}