declare namespace javax {
  namespace swing {
    interface ListCellRenderer$$lambda<E> {
      (
        arg0: javax.swing.JList<E>,
        arg1: E,
        arg2: number | java.lang.Integer,
        arg3: boolean | java.lang.Boolean,
        arg4: boolean | java.lang.Boolean
      ): java.awt.Component
    }

    interface ListCellRenderer<E> {
      getListCellRendererComponent(
        arg0: javax.swing.JList<E>,
        arg1: E,
        arg2: number | java.lang.Integer,
        arg3: boolean | java.lang.Boolean,
        arg4: boolean | java.lang.Boolean
      ): java.awt.Component
    }
  }
}
