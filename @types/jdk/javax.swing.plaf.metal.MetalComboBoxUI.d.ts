declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalComboBoxUI extends javax.swing.plaf.basic.BasicComboBoxUI {

          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paintCurrentValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
          public paintCurrentValueBackground(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          protected createEditor(): javax.swing.ComboBoxEditor
          protected createPopup(): javax.swing.plaf.basic.ComboPopup
          protected createArrowButton(): javax.swing.JButton
          public createPropertyChangeListener(): java.beans.PropertyChangeListener
          protected editablePropertyChanged(arg0: java.beans.PropertyChangeEvent): void
          protected createLayoutManager(): java.awt.LayoutManager
          public layoutComboBox(arg0: java.awt.Container, arg1: javax.swing.plaf.metal.MetalComboBoxUI$MetalComboBoxLayoutManager): void
          protected removeListeners(): void
          public configureEditor(): void
          public unconfigureEditor(): void
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          static access$000(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JButton
          static access$100(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JButton
          static access$200(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JComboBox
          static access$300(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JComboBox
          static access$400(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JButton
          static access$500(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JButton
          static access$600(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JList
          static access$700(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JButton
          static access$800(arg0: javax.swing.plaf.metal.MetalComboBoxUI): javax.swing.JList
        }

      }
    }
  }
}
