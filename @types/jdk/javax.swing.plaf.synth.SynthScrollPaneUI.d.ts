declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthScrollPaneUI
          extends javax.swing.plaf.basic.BasicScrollPaneUI
          implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI
        {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          protected installDefaults(arg0: javax.swing.JScrollPane): void
          protected installListeners(arg0: javax.swing.JScrollPane): void
          protected uninstallDefaults(arg0: javax.swing.JScrollPane): void
          protected uninstallListeners(arg0: javax.swing.JComponent): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthScrollPaneUI): javax.swing.JScrollPane
          static access$100(arg0: javax.swing.plaf.synth.SynthScrollPaneUI): javax.swing.JScrollPane
          static access$200(arg0: javax.swing.plaf.synth.SynthScrollPaneUI): javax.swing.JScrollPane
        }
      }
    }
  }
}
