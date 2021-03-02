declare namespace java {
  namespace awt {
    namespace im {

      class InputMethodHighlight {
        public static readonly RAW_TEXT: int
        public static readonly CONVERTED_TEXT: int
        public static readonly UNSELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
        public static readonly SELECTED_RAW_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
        public static readonly UNSELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
        public static readonly SELECTED_CONVERTED_TEXT_HIGHLIGHT: java.awt.im.InputMethodHighlight
        public constructor(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer)
        public constructor(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
        public constructor(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.util.Map<java.awt.font.TextAttribute,unknown>)
        public isSelected(): boolean
        public getState(): number
        public getVariation(): number
        public getStyle(): java.util.Map<java.awt.font.TextAttribute,unknown>
      }

    }
  }
}
