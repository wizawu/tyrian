declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthButtonUI extends javax.swing.plaf.basic.BasicButtonUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(arg0: javax.swing.AbstractButton): void
          protected installListeners(arg0: javax.swing.AbstractButton): void
          updateStyle(arg0: javax.swing.AbstractButton): void
          protected uninstallListeners(arg0: javax.swing.AbstractButton): void
          protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          getContext(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): javax.swing.plaf.synth.SynthContext
          public getBaseline(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          paintBackground(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: javax.swing.JComponent): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
          protected getDefaultIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
          protected getIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected getSizingIcon(arg0: javax.swing.AbstractButton): javax.swing.Icon
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        }

      }
    }
  }
}
