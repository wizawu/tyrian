declare namespace javax {
  namespace swing {
    namespace text {

      class LabelView extends javax.swing.text.GlyphView implements javax.swing.text.TabableView {
        public constructor(arg0: javax.swing.text.Element)
        sync(): void
        protected setUnderline(arg0: boolean): void
        protected setStrikeThrough(arg0: boolean): void
        protected setSuperscript(arg0: boolean): void
        protected setSubscript(arg0: boolean): void
        protected setBackground(arg0: java.awt.Color): void
        protected setPropertiesFromAttributes(): void
        protected getFontMetrics(): java.awt.FontMetrics
        public getBackground(): java.awt.Color
        public getForeground(): java.awt.Color
        public getFont(): java.awt.Font
        public isUnderline(): boolean
        public isStrikeThrough(): boolean
        public isSubscript(): boolean
        public isSuperscript(): boolean
        public changedUpdate(arg0: javax.swing.event.DocumentEvent, arg1: java.awt.Shape, arg2: javax.swing.text.ViewFactory): void
      }

    }
  }
}
