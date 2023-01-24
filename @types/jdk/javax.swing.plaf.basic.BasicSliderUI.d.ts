declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicSliderUI extends javax.swing.plaf.SliderUI {
          public static readonly POSITIVE_SCROLL: int
          public static readonly NEGATIVE_SCROLL: int
          public static readonly MIN_SCROLL: int
          public static readonly MAX_SCROLL: int
          protected scrollTimer: javax.swing.Timer
          protected slider: javax.swing.JSlider
          protected focusInsets: java.awt.Insets
          protected insetCache: java.awt.Insets
          protected leftToRightCache: boolean
          protected focusRect: java.awt.Rectangle
          protected contentRect: java.awt.Rectangle
          protected labelRect: java.awt.Rectangle
          protected tickRect: java.awt.Rectangle
          protected trackRect: java.awt.Rectangle
          protected thumbRect: java.awt.Rectangle
          protected trackBuffer: int
          protected trackListener: javax.swing.plaf.basic.BasicSliderUI$TrackListener
          protected changeListener: javax.swing.event.ChangeListener
          protected componentListener: java.awt.event.ComponentListener
          protected focusListener: java.awt.event.FocusListener
          protected scrollListener: javax.swing.plaf.basic.BasicSliderUI$ScrollListener
          protected propertyChangeListener: java.beans.PropertyChangeListener
          protected getShadowColor(): java.awt.Color
          protected getHighlightColor(): java.awt.Color
          protected getFocusColor(): java.awt.Color
          protected isDragging(): boolean
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor(arg0: javax.swing.JSlider)
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(arg0: javax.swing.JSlider): void
          protected uninstallDefaults(arg0: javax.swing.JSlider): void
          protected createTrackListener(arg0: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI$TrackListener
          protected createChangeListener(arg0: javax.swing.JSlider): javax.swing.event.ChangeListener
          protected createComponentListener(arg0: javax.swing.JSlider): java.awt.event.ComponentListener
          protected createFocusListener(arg0: javax.swing.JSlider): java.awt.event.FocusListener
          protected createScrollListener(arg0: javax.swing.JSlider): javax.swing.plaf.basic.BasicSliderUI$ScrollListener
          protected createPropertyChangeListener(arg0: javax.swing.JSlider): java.beans.PropertyChangeListener
          protected installListeners(arg0: javax.swing.JSlider): void
          protected uninstallListeners(arg0: javax.swing.JSlider): void
          protected installKeyboardActions(arg0: javax.swing.JSlider): void
          getInputMap(arg0: number | java.lang.Integer, arg1: javax.swing.JSlider): javax.swing.InputMap
          static loadActionMap(arg0: javax.swing.plaf.basic.LazyActionMap): void
          protected uninstallKeyboardActions(arg0: javax.swing.JSlider): void
          public getBaseline(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
          protected labelsHaveSameBaselines(): boolean
          public getPreferredHorizontalSize(): java.awt.Dimension
          public getPreferredVerticalSize(): java.awt.Dimension
          public getMinimumHorizontalSize(): java.awt.Dimension
          public getMinimumVerticalSize(): java.awt.Dimension
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected calculateGeometry(): void
          protected calculateFocusRect(): void
          protected calculateThumbSize(): void
          protected calculateContentRect(): void
          protected calculateThumbLocation(): void
          protected calculateTrackBuffer(): void
          protected calculateTrackRect(): void
          protected getTickLength(): number
          protected calculateTickRect(): void
          protected calculateLabelRect(): void
          protected getThumbSize(): java.awt.Dimension
          protected getWidthOfWidestLabel(): number
          protected getHeightOfTallestLabel(): number
          protected getWidthOfHighValueLabel(): number
          protected getWidthOfLowValueLabel(): number
          protected getHeightOfHighValueLabel(): number
          protected getHeightOfLowValueLabel(): number
          protected drawInverted(): boolean
          protected getHighestValue(): number
          protected getLowestValue(): number
          protected getLowestValueLabel(): java.awt.Component
          protected getHighestValueLabel(): java.awt.Component
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected recalculateIfInsetsChanged(): void
          protected recalculateIfOrientationChanged(): void
          public paintFocus(arg0: java.awt.Graphics): void
          public paintTrack(arg0: java.awt.Graphics): void
          public paintTicks(arg0: java.awt.Graphics): void
          protected paintMinorTickForHorizSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMajorTickForHorizSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMinorTickForVertSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          protected paintMajorTickForVertSlider(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: number | java.lang.Integer
          ): void
          public paintLabels(arg0: java.awt.Graphics): void
          protected paintHorizontalLabel(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: java.awt.Component
          ): void
          protected paintVerticalLabel(
            arg0: java.awt.Graphics,
            arg1: number | java.lang.Integer,
            arg2: java.awt.Component
          ): void
          public paintThumb(arg0: java.awt.Graphics): void
          public setThumbLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
          public scrollByBlock(arg0: number | java.lang.Integer): void
          public scrollByUnit(arg0: number | java.lang.Integer): void
          protected scrollDueToClickInTrack(arg0: number | java.lang.Integer): void
          protected xPositionForValue(arg0: number | java.lang.Integer): number
          protected yPositionForValue(arg0: number | java.lang.Integer): number
          protected yPositionForValue(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): number
          public valueForYPosition(arg0: number | java.lang.Integer): number
          public valueForXPosition(arg0: number | java.lang.Integer): number
        }
      }
    }
  }
}
