declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthTableHeaderUI
          extends javax.swing.plaf.basic.BasicTableHeaderUI
          implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI
        {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallDefaults(): void
          protected uninstallListeners(): void
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
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          protected rolloverColumnUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthTableHeaderUI): number
        }
      }
    }
  }
}
