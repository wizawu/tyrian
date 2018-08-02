declare namespace javax {
    namespace print {
        namespace attribute {
class AttributeSetUtilities {
    public static unmodifiableView(arg0: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
    public static unmodifiableView(arg0: javax.print.attribute.DocAttributeSet): javax.print.attribute.DocAttributeSet
    public static unmodifiableView(arg0: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
    public static unmodifiableView(arg0: javax.print.attribute.PrintJobAttributeSet): javax.print.attribute.PrintJobAttributeSet
    public static unmodifiableView(arg0: javax.print.attribute.PrintServiceAttributeSet): javax.print.attribute.PrintServiceAttributeSet
    public static synchronizedView(arg0: javax.print.attribute.AttributeSet): javax.print.attribute.AttributeSet
    public static synchronizedView(arg0: javax.print.attribute.DocAttributeSet): javax.print.attribute.DocAttributeSet
    public static synchronizedView(arg0: javax.print.attribute.PrintRequestAttributeSet): javax.print.attribute.PrintRequestAttributeSet
    public static synchronizedView(arg0: javax.print.attribute.PrintJobAttributeSet): javax.print.attribute.PrintJobAttributeSet
    public static synchronizedView(arg0: javax.print.attribute.PrintServiceAttributeSet): javax.print.attribute.PrintServiceAttributeSet
    public static verifyAttributeCategory(arg0: java.lang.Object, arg1: java.lang.Class<any>): java.lang.Class<any>
    public static verifyAttributeValue(arg0: java.lang.Object, arg1: java.lang.Class<any>): javax.print.attribute.Attribute
    public static verifyCategoryForValue(arg0: java.lang.Class<any>, arg1: javax.print.attribute.Attribute): void
    public static class: java.lang.Class<any>
}

        }
    }
}