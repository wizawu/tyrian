declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalComboBoxButton extends javax.swing.JButton {

          protected comboBox: javax.swing.JComboBox<java.lang.Object>
          protected listBox: javax.swing.JList<java.lang.Object>
          protected rendererPane: javax.swing.CellRendererPane
          protected comboIcon: javax.swing.Icon
          protected iconOnly: boolean
          public readonly getComboBox(): javax.swing.JComboBox<java.lang.Object>
          public readonly setComboBox(arg0: javax.swing.JComboBox<java.lang.Object>): void
          public readonly getComboIcon(): javax.swing.Icon
          public readonly setComboIcon(arg0: javax.swing.Icon): void
          public readonly isIconOnly(): boolean
          public readonly setIconOnly(arg0: boolean): void
          constructor()
          public constructor(arg0: javax.swing.JComboBox<java.lang.Object>, arg1: javax.swing.Icon, arg2: javax.swing.CellRendererPane, arg3: javax.swing.JList<java.lang.Object>)
          public constructor(arg0: javax.swing.JComboBox<java.lang.Object>, arg1: javax.swing.Icon, arg2: boolean, arg3: javax.swing.CellRendererPane, arg4: javax.swing.JList<java.lang.Object>)
          public isFocusTraversable(): boolean
          public setEnabled(arg0: boolean): void
          public paintComponent(arg0: java.awt.Graphics): void
          public getMinimumSize(): java.awt.Dimension
        }

      }
    }
  }
}