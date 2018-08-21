declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkEditableText extends org.GNOME.Accessibility.AtkText {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public set_text_contents(arg0: java.lang.String | string): void
                public insert_text(arg0: java.lang.String | string, arg1: int): void
                public copy_text(arg0: int, arg1: int): void
                public cut_text(arg0: int, arg1: int): void
                public delete_text(arg0: int, arg1: int): void
                public paste_text(arg0: int): void
                public setRunAttributes(arg0: javax.swing.text.AttributeSet, arg1: int, arg2: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}