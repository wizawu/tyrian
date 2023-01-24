declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthProgressBarUI
          extends javax.swing.plaf.basic.BasicProgressBarUI
          implements javax.swing.plaf.synth.SynthUI, java.beans.PropertyChangeListener
        {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          protected getBox(arg0: java.awt.Rectangle): java.awt.Rectangle
          protected setAnimationIndex(arg0: number | java.lang.Integer): void
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintText(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: java.lang.String | string
          ): void
          public paintBorder(
            arg0: javax.swing.plaf.synth.SynthContext,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }
      }
    }
  }
}
