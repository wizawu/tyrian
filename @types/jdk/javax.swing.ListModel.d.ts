declare namespace javax {
  namespace swing {

    interface ListModel<E> {
      getSize(): number
      getElementAt(arg0: number | java.lang.Integer): E
      addListDataListener(arg0: javax.swing.event.ListDataListener): void
      removeListDataListener(arg0: javax.swing.event.ListDataListener): void
    }

  }
}
