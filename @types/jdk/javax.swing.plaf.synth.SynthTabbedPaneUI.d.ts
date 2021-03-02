declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthTabbedPaneUI extends javax.swing.plaf.basic.BasicTabbedPaneUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected installDefaults(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected uninstallDefaults(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          protected createScrollButton(arg0: number | java.lang.Integer): javax.swing.JButton
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          protected createMouseListener(): java.awt.event.MouseListener
          protected getTabLabelShiftX(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): number
          protected getTabLabelShiftY(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): number
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected getBaseline(arg0: number | java.lang.Integer): number
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          protected paintTabArea(arg0: java.awt.Graphics, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
          protected setRolloverTab(arg0: number | java.lang.Integer): void
          protected calculateMaxTabHeight(arg0: number | java.lang.Integer): number
          protected calculateTabWidth(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.awt.FontMetrics): number
          protected calculateMaxTabWidth(arg0: number | java.lang.Integer): number
          protected getTabInsets(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Insets
          protected getFontMetrics(): java.awt.FontMetrics
          protected createLayoutManager(): java.awt.LayoutManager
          static access$000(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$100(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$200(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$300(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$400(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$500(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$600(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$700(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$800(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): number
          static access$900(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): number[]
          static access$1000(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): number[]
          static access$1100(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): number
          static access$1200(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): javax.swing.JTabbedPane
          static access$1300(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1400(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1500(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
          static access$1600(arg0: javax.swing.plaf.synth.SynthTabbedPaneUI): java.awt.Rectangle[]
        }

      }
    }
  }
}
