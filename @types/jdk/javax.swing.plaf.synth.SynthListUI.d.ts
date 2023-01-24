declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthListUI
          extends javax.swing.plaf.basic.BasicListUI
          implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI
        {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paintBorder(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          protected installListeners(): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
        }
      }
    }
  }
}
