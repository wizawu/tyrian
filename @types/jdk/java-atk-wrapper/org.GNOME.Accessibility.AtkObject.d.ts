declare namespace org {
    namespace GNOME {
        namespace Accessibility {
            class AtkObject {
                public static readonly INTERFACE_ACTION: int
                public static readonly INTERFACE_COMPONENT: int
                public static readonly INTERFACE_DOCUMENT: int
                public static readonly INTERFACE_EDITABLE_TEXT: int
                public static readonly INTERFACE_HYPERLINK: int
                public static readonly INTERFACE_HYPERTEXT: int
                public static readonly INTERFACE_IMAGE: int
                public static readonly INTERFACE_SELECTION: int
                public static readonly INTERFACE_STREAMABLE_CONTENT: int
                public static readonly INTERFACE_TABLE: int
                public static readonly INTERFACE_TABLE_CELL: int
                public static readonly INTERFACE_TEXT: int
                public static readonly INTERFACE_VALUE: int
                public constructor()
                public static getTFlagFromObj(arg0: java.lang.Object): int
                public static getAccessibleParent(arg0: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext
                public static setAccessibleParent(arg0: javax.accessibility.AccessibleContext, arg1: javax.accessibility.AccessibleContext): void
                public static getAccessibleName(arg0: javax.accessibility.AccessibleContext): string
                public static setAccessibleName(arg0: javax.accessibility.AccessibleContext, arg1: java.lang.String | string): void
                public static getAccessibleDescription(arg0: javax.accessibility.AccessibleContext): string
                public static setAccessibleDescription(arg0: javax.accessibility.AccessibleContext, arg1: java.lang.String | string): void
                public static getAccessibleChildrenCount(arg0: javax.accessibility.AccessibleContext): int
                public static getAccessibleIndexInParent(arg0: javax.accessibility.AccessibleContext): int
                public static getAccessibleRole(arg0: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleRole
                public static equalsIgnoreCaseLocaleWithRole(arg0: javax.accessibility.AccessibleRole): boolean
                public static getArrayAccessibleState(arg0: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleState[]
                public static getLocale(arg0: javax.accessibility.AccessibleContext): string
                public static getArrayAccessibleRelation(arg0: javax.accessibility.AccessibleContext): org.GNOME.Accessibility.AtkObject$WrapKeyAndTarget[]
                public static getAccessibleChild(arg0: javax.accessibility.AccessibleContext, arg1: int): javax.accessibility.AccessibleContext
                public static hashCode(arg0: javax.accessibility.AccessibleContext): int
                public static class: java.lang.Class<any>
            }
        }
    }
}