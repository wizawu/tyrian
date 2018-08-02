declare namespace javax {
    namespace accessibility {
abstract class AccessibleContext {
    public static ACCESSIBLE_NAME_PROPERTY: string
    public static ACCESSIBLE_DESCRIPTION_PROPERTY: string
    public static ACCESSIBLE_STATE_PROPERTY: string
    public static ACCESSIBLE_VALUE_PROPERTY: string
    public static ACCESSIBLE_SELECTION_PROPERTY: string
    public static ACCESSIBLE_CARET_PROPERTY: string
    public static ACCESSIBLE_VISIBLE_DATA_PROPERTY: string
    public static ACCESSIBLE_CHILD_PROPERTY: string
    public static ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: string
    public static ACCESSIBLE_TABLE_CAPTION_CHANGED: string
    public static ACCESSIBLE_TABLE_SUMMARY_CHANGED: string
    public static ACCESSIBLE_TABLE_MODEL_CHANGED: string
    public static ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: string
    public static ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: string
    public static ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: string
    public static ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: string
    public static ACCESSIBLE_ACTION_PROPERTY: string
    public static ACCESSIBLE_HYPERTEXT_OFFSET: string
    public static ACCESSIBLE_TEXT_PROPERTY: string
    public static ACCESSIBLE_INVALIDATE_CHILDREN: string
    public static ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: string
    public static ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: string
    protected accessibleParent: javax.accessibility.Accessible
    protected accessibleName: string
    protected accessibleDescription: string
    public constructor()
    public getAccessibleName(): string
    public setAccessibleName(arg0: java.lang.String | string): void
    public getAccessibleDescription(): string
    public setAccessibleDescription(arg0: java.lang.String | string): void
    public getAccessibleRole(): javax.accessibility.AccessibleRole
    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
    public getAccessibleParent(): javax.accessibility.Accessible
    public setAccessibleParent(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
    public getAccessibleIndexInParent(): int
    public getAccessibleChildrenCount(): int
    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
    public getLocale(): java.util.Locale
    public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
    public getAccessibleAction(): javax.accessibility.AccessibleAction
    public getAccessibleComponent(): javax.accessibility.AccessibleComponent
    public getAccessibleSelection(): javax.accessibility.AccessibleSelection
    public getAccessibleText(): javax.accessibility.AccessibleText
    public getAccessibleEditableText(): javax.accessibility.AccessibleEditableText
    public getAccessibleValue(): javax.accessibility.AccessibleValue
    public getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
    public getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
    public getAccessibleTable(): javax.accessibility.AccessibleTable
    public firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
    public static class: java.lang.Class<any>
}

    }
}