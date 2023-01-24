declare namespace javax {
  namespace swing {
    namespace text {
      class StyleContext implements java.io.Serializable, javax.swing.text.AbstractDocument$AttributeContext {
        public static readonly DEFAULT_STYLE: java.lang.String
        static readonly THRESHOLD: int
        public static getDefaultStyleContext(): javax.swing.text.StyleContext
        public constructor()
        public addStyle(arg0: java.lang.String | string, arg1: javax.swing.text.Style): javax.swing.text.Style
        public removeStyle(arg0: java.lang.String | string): void
        public getStyle(arg0: java.lang.String | string): javax.swing.text.Style
        public getStyleNames(): java.util.Enumeration<unknown>
        public addChangeListener(
          arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
        ): void
        public removeChangeListener(
          arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
        ): void
        public getChangeListeners(): javax.swing.event.ChangeListener[]
        public getFont(arg0: javax.swing.text.AttributeSet): java.awt.Font
        public getForeground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        public getBackground(arg0: javax.swing.text.AttributeSet): java.awt.Color
        public getFont(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.awt.Font
        public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
        public addAttribute(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.lang.Object | any,
          arg2: java.lang.Object | any
        ): javax.swing.text.AttributeSet
        public addAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: javax.swing.text.AttributeSet
        ): javax.swing.text.AttributeSet
        public removeAttribute(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.lang.Object | any
        ): javax.swing.text.AttributeSet
        public removeAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: java.util.Enumeration<unknown>
        ): javax.swing.text.AttributeSet
        public removeAttributes(
          arg0: javax.swing.text.AttributeSet,
          arg1: javax.swing.text.AttributeSet
        ): javax.swing.text.AttributeSet
        public getEmptySet(): javax.swing.text.AttributeSet
        public reclaim(arg0: javax.swing.text.AttributeSet): void
        protected getCompressionThreshold(): number
        protected createSmallAttributeSet(
          arg0: javax.swing.text.AttributeSet
        ): javax.swing.text.StyleContext$SmallAttributeSet
        protected createLargeAttributeSet(arg0: javax.swing.text.AttributeSet): javax.swing.text.MutableAttributeSet
        removeUnusedSets(): void
        getImmutableUniqueSet(): javax.swing.text.AttributeSet
        getMutableAttributeSet(arg0: javax.swing.text.AttributeSet): javax.swing.text.MutableAttributeSet
        public toString(): java.lang.String
        public writeAttributes(arg0: java.io.ObjectOutputStream, arg1: javax.swing.text.AttributeSet): void
        public readAttributes(arg0: java.io.ObjectInputStream, arg1: javax.swing.text.MutableAttributeSet): void
        public static writeAttributeSet(arg0: java.io.ObjectOutputStream, arg1: javax.swing.text.AttributeSet): void
        public static readAttributeSet(
          arg0: java.io.ObjectInputStream,
          arg1: javax.swing.text.MutableAttributeSet
        ): void
        public static registerStaticAttributeKey(arg0: java.lang.Object | any): void
        public static getStaticAttribute(arg0: java.lang.Object | any): java.lang.Object
        public static getStaticAttributeKey(arg0: java.lang.Object | any): java.lang.Object
      }
    }
  }
}
