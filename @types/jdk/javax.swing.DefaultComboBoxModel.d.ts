declare namespace javax {
  namespace swing {

    class DefaultComboBoxModel<E> extends javax.swing.AbstractListModel<E> implements javax.swing.MutableComboBoxModel<E>, java.io.Serializable {
      objects: java.util.Vector<E>
      selectedObject: java.lang.Object
      public constructor()
      public constructor(arg0: E[])
      public constructor(arg0: java.util.Vector<E>)
      public setSelectedItem(arg0: java.lang.Object): void
      public getSelectedItem(): java.lang.Object
      public getSize(): int
      public getElementAt(arg0: int): E
      public getIndexOf(arg0: java.lang.Object): int
      public addElement(arg0: E): void
      public insertElementAt(arg0: E, arg1: int): void
      public removeElementAt(arg0: int): void
      public removeElement(arg0: java.lang.Object): void
      public removeAllElements(): void
      public addAll(arg0: java.util.Collection<E>): void
      public addAll(arg0: int, arg1: java.util.Collection<E>): void
    }

  }
}
