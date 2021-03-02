declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthComboBoxUI extends javax.swing.plaf.basic.BasicComboBoxUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          popupInsets: java.awt.Insets
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          protected installDefaults(): void
          protected installListeners(): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          protected createPopup(): javax.swing.plaf.basic.ComboPopup
          protected createRenderer(): javax.swing.ListCellRenderer<java.lang.Object>
          protected createEditor(): javax.swing.ComboBoxEditor
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected createArrowButton(): javax.swing.JButton
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
          public paintCurrentValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean | java.lang.Boolean): void
          protected getDefaultSize(): java.awt.Dimension
          static access$000(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$100(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$200(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$300(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$400(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$500(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$600(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
          static access$700(arg0: javax.swing.plaf.synth.SynthComboBoxUI): javax.swing.JComboBox
        }

      }
    }
  }
}
