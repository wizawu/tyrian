declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected configureScrollBarColors(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public getSupportsAbsolutePositioning(): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
          protected paintTrack(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
          protected paintThumb(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected getMinimumThumbSize(): java.awt.Dimension
          protected createDecreaseButton(arg0: number | java.lang.Integer): javax.swing.JButton
          protected createIncreaseButton(arg0: number | java.lang.Integer): javax.swing.JButton
          protected setThumbRollover(arg0: boolean | java.lang.Boolean): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$100(arg0: javax.swing.plaf.synth.SynthScrollBarUI): javax.swing.JScrollBar
          static access$200(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$300(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$400(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$500(arg0: javax.swing.plaf.synth.SynthScrollBarUI): javax.swing.JScrollBar
          static access$600(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$700(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$800(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
          static access$900(arg0: javax.swing.plaf.synth.SynthScrollBarUI): number
        }

      }
    }
  }
}
