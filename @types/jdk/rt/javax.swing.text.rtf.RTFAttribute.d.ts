declare namespace javax {
    namespace swing {
        namespace text {
            namespace rtf {
interface RTFAttribute {
    D_CHARACTER: int
    D_PARAGRAPH: int
    D_SECTION: int
    D_DOCUMENT: int
    D_META: int
    domain(): int
    swingName(): java.lang.Object
    rtfName(): string
    set(arg0: javax.swing.text.MutableAttributeSet): boolean
    set(arg0: javax.swing.text.MutableAttributeSet, arg1: int): boolean
    setDefault(arg0: javax.swing.text.MutableAttributeSet): boolean
    write(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.rtf.RTFGenerator, arg2: boolean): boolean
    writeValue(arg0: java.lang.Object, arg1: javax.swing.text.rtf.RTFGenerator, arg2: boolean): boolean
}

            }
        }
    }
}