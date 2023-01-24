declare namespace javax {
  namespace swing {
    namespace text {
      class DefaultCaret
        extends java.awt.Rectangle
        implements
          javax.swing.text.Caret,
          java.awt.event.FocusListener,
          java.awt.event.MouseListener,
          java.awt.event.MouseMotionListener
      {
        public static readonly UPDATE_WHEN_ON_EDT: int
        public static readonly NEVER_UPDATE: int
        public static readonly ALWAYS_UPDATE: int
        protected listenerList: javax.swing.event.EventListenerList
        protected changeEvent: javax.swing.event.ChangeEvent
        component: javax.swing.text.JTextComponent
        updatePolicy: int
        visible: boolean
        active: boolean
        dot: int
        mark: int
        selectionTag: java.lang.Object
        selectionVisible: boolean
        flasher: javax.swing.Timer
        magicCaretPosition: java.awt.Point
        dotBias: javax.swing.text.Position$Bias
        markBias: javax.swing.text.Position$Bias
        dotLTR: boolean
        markLTR: boolean
        handler: javax.swing.text.DefaultCaret$Handler
        public constructor()
        public setUpdatePolicy(arg0: number | java.lang.Integer): void
        public getUpdatePolicy(): number
        protected getComponent(): javax.swing.text.JTextComponent
        protected repaint(): void
        protected damage(arg0: java.awt.Rectangle): void
        protected adjustVisibility(arg0: java.awt.Rectangle): void
        protected getSelectionPainter(): javax.swing.text.Highlighter$HighlightPainter
        protected positionCaret(arg0: java.awt.event.MouseEvent): void
        protected moveCaret(arg0: java.awt.event.MouseEvent): void
        public focusGained(arg0: java.awt.event.FocusEvent): void
        public focusLost(arg0: java.awt.event.FocusEvent): void
        public mouseClicked(arg0: java.awt.event.MouseEvent): void
        public mousePressed(arg0: java.awt.event.MouseEvent): void
        adjustCaretAndFocus(arg0: java.awt.event.MouseEvent): void
        public mouseReleased(arg0: java.awt.event.MouseEvent): void
        public mouseEntered(arg0: java.awt.event.MouseEvent): void
        public mouseExited(arg0: java.awt.event.MouseEvent): void
        public mouseDragged(arg0: java.awt.event.MouseEvent): void
        public mouseMoved(arg0: java.awt.event.MouseEvent): void
        public paint(arg0: java.awt.Graphics): void
        public install(arg0: javax.swing.text.JTextComponent): void
        public deinstall(arg0: javax.swing.text.JTextComponent): void
        public addChangeListener(
          arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
        ): void
        public removeChangeListener(
          arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
        ): void
        public getChangeListeners(): javax.swing.event.ChangeListener[]
        protected fireStateChanged(): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        public setSelectionVisible(arg0: boolean | java.lang.Boolean): void
        public isSelectionVisible(): boolean
        public isActive(): boolean
        public isVisible(): boolean
        public setVisible(arg0: boolean | java.lang.Boolean): void
        public setBlinkRate(arg0: number | java.lang.Integer): void
        public getBlinkRate(): number
        public getDot(): number
        public getMark(): number
        public setDot(arg0: number | java.lang.Integer): void
        public moveDot(arg0: number | java.lang.Integer): void
        public moveDot(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): void
        handleMoveDot(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): void
        public setDot(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): void
        handleSetDot(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): void
        public getDotBias(): javax.swing.text.Position$Bias
        public getMarkBias(): javax.swing.text.Position$Bias
        isDotLeftToRight(): boolean
        isMarkLeftToRight(): boolean
        isPositionLTR(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): boolean
        guessBiasForOffset(
          arg0: number | java.lang.Integer,
          arg1: javax.swing.text.Position$Bias,
          arg2: boolean | java.lang.Boolean
        ): javax.swing.text.Position$Bias
        changeCaretPosition(arg0: number | java.lang.Integer, arg1: javax.swing.text.Position$Bias): void
        repaintNewCaret(): void
        public setMagicCaretPosition(arg0: java.awt.Point): void
        public getMagicCaretPosition(): java.awt.Point
        public equals(arg0: java.lang.Object | any): boolean
        public toString(): java.lang.String
        getCaretWidth(arg0: number | java.lang.Integer): number
      }
    }
  }
}
