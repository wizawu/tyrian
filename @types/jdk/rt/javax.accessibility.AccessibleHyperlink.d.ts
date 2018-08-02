declare namespace javax {
    namespace accessibility {
        abstract class AccessibleHyperlink implements javax.accessibility.AccessibleAction {
            public constructor()
            public isValid(): boolean
            public getAccessibleActionCount(): int
            public doAccessibleAction(arg0: int): boolean
            public getAccessibleActionDescription(arg0: int): string
            public getAccessibleActionObject(arg0: int): java.lang.Object
            public getAccessibleActionAnchor(arg0: int): java.lang.Object
            public getStartIndex(): int
            public getEndIndex(): int
            public static class: java.lang.Class<any>
        }
    }
}