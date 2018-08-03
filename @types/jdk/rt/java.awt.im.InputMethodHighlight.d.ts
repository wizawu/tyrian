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
                public constructor(arg0: boolean, arg1: int)
                public constructor(arg0: boolean, arg1: int, arg2: int)
                public constructor(arg0: boolean, arg1: int, arg2: int, arg3: java.util.Map<java.awt.font.TextAttribute, any>)
                public isSelected(): boolean
                public getState(): int
                public getVariation(): int
                public getStyle(): java.util.Map<java.awt.font.TextAttribute, any>
                public static class: java.lang.Class<any>
            }
        }
    }
}