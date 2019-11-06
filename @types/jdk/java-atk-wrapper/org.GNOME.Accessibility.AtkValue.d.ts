declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkValue {
                public constructor(arg0: javax.accessibility.AccessibleContext)
                public static createAtkValue(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkValue
                public get_current_value(): java.lang.Number
                public getMaximumValue(): double
                public getMinimumValue(): double
                public setValue(arg0: java.lang.Number): void
                public getIncrement(): double
                public static class: java.lang.Class<any>
            }
        }
    }
}