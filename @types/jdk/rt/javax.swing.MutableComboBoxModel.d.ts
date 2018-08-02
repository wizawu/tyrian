declare namespace javax {
    namespace swing {
        interface MutableComboBoxModel<E> extends javax.swing.ComboBoxModel<E> {
            addElement(arg0: E): void
            removeElement(arg0: java.lang.Object): void
            insertElementAt(arg0: E, arg1: int): void
            removeElementAt(arg0: int): void
        }
    }
}