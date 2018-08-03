declare namespace java {
    namespace awt {
        class Checkbox$AccessibleAWTCheckbox extends java.awt.Component$AccessibleAWTComponent implements java.awt.event.ItemListener , javax.accessibility.AccessibleAction , javax.accessibility.AccessibleValue {
            public constructor(arg0: java.awt.Checkbox)
            public itemStateChanged(arg0: java.awt.event.ItemEvent): void
            public getAccessibleAction(): javax.accessibility.AccessibleAction
            public getAccessibleValue(): javax.accessibility.AccessibleValue
            public getAccessibleActionCount(): int
            public getAccessibleActionDescription(arg0: int): string
            public doAccessibleAction(arg0: int): boolean
            public getCurrentAccessibleValue(): java.lang.Number
            public setCurrentAccessibleValue(arg0: java.lang.Number): boolean
            public getMinimumAccessibleValue(): java.lang.Number
            public getMaximumAccessibleValue(): java.lang.Number
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
            public static class: java.lang.Class<any>
        }
    }
}