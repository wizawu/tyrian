declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthToolBarUI extends javax.swing.plaf.basic.BasicToolBarUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected uninstallDefaults(): void
          protected installComponents(): void
          protected uninstallComponents(): void
          protected createLayout(): java.awt.LayoutManager
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          protected setBorderToNonRollover(arg0: java.awt.Component): void
          protected setBorderToRollover(arg0: java.awt.Component): void
          protected setBorderToNormal(arg0: java.awt.Component): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintContent(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
          protected paintDragWindow(arg0: java.awt.Graphics): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        }

      }
    }
  }
}
