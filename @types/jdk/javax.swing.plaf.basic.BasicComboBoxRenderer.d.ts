declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicComboBoxRenderer
          extends javax.swing.JLabel
          implements javax.swing.ListCellRenderer<java.lang.Object>, java.io.Serializable
        {
          protected static noFocusBorder: javax.swing.border.Border
          public constructor()
          public getPreferredSize(): java.awt.Dimension
          public getListCellRendererComponent(
            arg0: javax.swing.JList<unknown>,
            arg1: java.lang.Object | any,
            arg2: number | java.lang.Integer,
            arg3: boolean | java.lang.Boolean,
            arg4: boolean | java.lang.Boolean
          ): java.awt.Component
        }
      }
    }
  }
}
