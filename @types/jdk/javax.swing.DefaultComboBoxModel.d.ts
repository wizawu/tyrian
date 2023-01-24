declare namespace javax {
  namespace swing {
    class DefaultComboBoxModel<E>
      extends javax.swing.AbstractListModel<E>
      implements javax.swing.MutableComboBoxModel<E>, java.io.Serializable
    {
      objects: java.util.Vector<E>
      selectedObject: java.lang.Object
      public constructor()
      public constructor(arg0: E[])
      public constructor(arg0: java.util.Vector<E>)
      public setSelectedItem(arg0: java.lang.Object | any): void
      public getSelectedItem(): java.lang.Object
      public getSize(): number
      public getElementAt(arg0: number | java.lang.Integer): E
      public getIndexOf(arg0: java.lang.Object | any): number
      public addElement(arg0: E): void
      public insertElementAt(arg0: E, arg1: number | java.lang.Integer): void
      public removeElementAt(arg0: number | java.lang.Integer): void
      public removeElement(arg0: java.lang.Object | any): void
      public removeAllElements(): void
      public addAll(arg0: java.util.Collection<E>): void
      public addAll(arg0: number | java.lang.Integer, arg1: java.util.Collection<E>): void
    }
  }
}
