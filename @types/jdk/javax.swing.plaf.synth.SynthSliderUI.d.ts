declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {

        class SynthSliderUI extends javax.swing.plaf.basic.BasicSliderUI implements java.beans.PropertyChangeListener, javax.swing.plaf.synth.SynthUI {

          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          protected constructor(arg0: javax.swing.JSlider)
          protected installDefaults(arg0: javax.swing.JSlider): void
          protected uninstallDefaults(arg0: javax.swing.JSlider): void
          protected installListeners(arg0: javax.swing.JSlider): void
          protected uninstallListeners(arg0: javax.swing.JSlider): void
          protected createTrackListener(arg0: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI$TrackListener
          public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected calculateGeometry(): void
          protected layout(): void
          protected calculateThumbLocation(): void
          public setThumbLocation(arg0: int, arg1: int): void
          protected xPositionForValue(arg0: int): int
          protected yPositionForValue(arg0: int, arg1: int, arg2: int): int
          public valueForYPosition(arg0: int): int
          public valueForXPosition(arg0: int): int
          protected getThumbSize(): java.awt.Dimension
          protected recalculateIfInsetsChanged(): void
          public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
          public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
          protected paintThumb(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
          protected paintTrack(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          static access$000(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$100(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$200(arg0: javax.swing.plaf.synth.SynthSliderUI): boolean
          static access$300(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$400(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$500(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$600(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$700(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$800(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$900(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$1000(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$1100(arg0: javax.swing.plaf.synth.SynthSliderUI, arg1: int): int
          static access$1200(arg0: javax.swing.plaf.synth.SynthSliderUI): boolean
          static access$1300(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$1400(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$1500(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$1600(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$1700(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$1800(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$1900(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$2000(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$2100(arg0: javax.swing.plaf.synth.SynthSliderUI): boolean
          static access$2200(arg0: javax.swing.plaf.synth.SynthSliderUI): java.awt.Rectangle
          static access$2300(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
          static access$2400(arg0: javax.swing.plaf.synth.SynthSliderUI): javax.swing.JSlider
        }

      }
    }
  }
}
