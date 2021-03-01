declare namespace javax {
  namespace swing {

    interface ListModel<E> {

      getSize(): int
      getElementAt(arg0: int): E
      addListDataListener(arg0: javax.swing.event.ListDataListener): void
      removeListDataListener(arg0: javax.swing.event.ListDataListener): void
    }

  }
}
