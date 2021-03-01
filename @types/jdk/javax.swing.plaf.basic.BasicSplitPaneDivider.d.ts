declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicSplitPaneDivider extends java.awt.Container implements java.beans.PropertyChangeListener {

          protected static readonly ONE_TOUCH_SIZE: int
          protected static readonly ONE_TOUCH_OFFSET: int
          protected dragger: javax.swing.plaf.basic.BasicSplitPaneDivider$DragController
          protected splitPaneUI: javax.swing.plaf.basic.BasicSplitPaneUI
          protected dividerSize: int
          protected hiddenDivider: java.awt.Component
          protected splitPane: javax.swing.JSplitPane
          protected mouseHandler: javax.swing.plaf.basic.BasicSplitPaneDivider$MouseHandler
          protected orientation: int
          protected leftButton: javax.swing.JButton
          protected rightButton: javax.swing.JButton
          public constructor(arg0: javax.swing.plaf.basic.BasicSplitPaneUI)
          public setBasicSplitPaneUI(arg0: javax.swing.plaf.basic.BasicSplitPaneUI): void
          public getBasicSplitPaneUI(): javax.swing.plaf.basic.BasicSplitPaneUI
          public setDividerSize(arg0: int): void
          public getDividerSize(): int
          public setBorder(arg0: javax.swing.border.Border): void
          public getBorder(): javax.swing.border.Border
          public getInsets(): java.awt.Insets
          protected setMouseOver(arg0: boolean): void
          public isMouseOver(): boolean
          public getPreferredSize(): java.awt.Dimension
          public getMinimumSize(): java.awt.Dimension
          public propertyChange(arg0: java.beans.PropertyChangeEvent): void
          public paint(arg0: java.awt.Graphics): void
          protected oneTouchExpandableChanged(): void
          protected createLeftOneTouchButton(): javax.swing.JButton
          protected createRightOneTouchButton(): javax.swing.JButton
          protected prepareForDragging(): void
          protected dragDividerTo(arg0: int): void
          protected finishDraggingTo(arg0: int): void
        }

      }
    }
  }
}
