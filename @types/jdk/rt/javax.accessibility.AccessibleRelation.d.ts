declare namespace javax {
    namespace accessibility {
        class AccessibleRelation extends javax.accessibility.AccessibleBundle {
            public static readonly LABEL_FOR: string
            public static readonly LABELED_BY: string
            public static readonly MEMBER_OF: string
            public static readonly CONTROLLER_FOR: string
            public static readonly CONTROLLED_BY: string
            public static readonly FLOWS_TO: string
            public static readonly FLOWS_FROM: string
            public static readonly SUBWINDOW_OF: string
            public static readonly PARENT_WINDOW_OF: string
            public static readonly EMBEDS: string
            public static readonly EMBEDDED_BY: string
            public static readonly CHILD_NODE_OF: string
            public static readonly LABEL_FOR_PROPERTY: string
            public static readonly LABELED_BY_PROPERTY: string
            public static readonly MEMBER_OF_PROPERTY: string
            public static readonly CONTROLLER_FOR_PROPERTY: string
            public static readonly CONTROLLED_BY_PROPERTY: string
            public static readonly FLOWS_TO_PROPERTY: string
            public static readonly FLOWS_FROM_PROPERTY: string
            public static readonly SUBWINDOW_OF_PROPERTY: string
            public static readonly PARENT_WINDOW_OF_PROPERTY: string
            public static readonly EMBEDS_PROPERTY: string
            public static readonly EMBEDDED_BY_PROPERTY: string
            public static readonly CHILD_NODE_OF_PROPERTY: string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object[])
            public getKey(): string
            public getTarget(): java.lang.Object[]
            public setTarget(arg0: java.lang.Object): void
            public setTarget(arg0: java.lang.Object[]): void
            public static class: java.lang.Class<any>
        }
    }
}