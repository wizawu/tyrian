declare namespace javax {
  namespace accessibility {

    abstract class AccessibleContext {
      public static readonly ACCESSIBLE_NAME_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_DESCRIPTION_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_STATE_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_VALUE_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_SELECTION_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_CARET_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_VISIBLE_DATA_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_CHILD_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_ACTIVE_DESCENDANT_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_TABLE_CAPTION_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_SUMMARY_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_MODEL_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_ROW_HEADER_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_ROW_DESCRIPTION_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_COLUMN_HEADER_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_TABLE_COLUMN_DESCRIPTION_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_ACTION_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_HYPERTEXT_OFFSET: java.lang.String
      public static readonly ACCESSIBLE_TEXT_PROPERTY: java.lang.String
      public static readonly ACCESSIBLE_INVALIDATE_CHILDREN: java.lang.String
      public static readonly ACCESSIBLE_TEXT_ATTRIBUTES_CHANGED: java.lang.String
      public static readonly ACCESSIBLE_COMPONENT_BOUNDS_CHANGED: java.lang.String
      protected accessibleParent: javax.accessibility.Accessible
      protected accessibleName: java.lang.String
      protected accessibleDescription: java.lang.String
      public constructor()
      public getAccessibleName(): java.lang.String
      public setAccessibleName(arg0: java.lang.String | string): void
      public getAccessibleDescription(): java.lang.String
      public setAccessibleDescription(arg0: java.lang.String | string): void
      public abstract getAccessibleRole(): javax.accessibility.AccessibleRole
      public abstract getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
      public getAccessibleParent(): javax.accessibility.Accessible
      public setAccessibleParent(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$lambda): void
      public abstract getAccessibleIndexInParent(): number
      public abstract getAccessibleChildrenCount(): number
      public abstract getAccessibleChild(arg0: number | java.lang.Integer): javax.accessibility.Accessible
      public abstract getLocale(): java.util.Locale
      public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
      public getAccessibleAction(): javax.accessibility.AccessibleAction
      public getAccessibleComponent(): javax.accessibility.AccessibleComponent
      public getAccessibleSelection(): javax.accessibility.AccessibleSelection
      public getAccessibleText(): javax.accessibility.AccessibleText
      public getAccessibleEditableText(): javax.accessibility.AccessibleEditableText
      public getAccessibleValue(): javax.accessibility.AccessibleValue
      public getAccessibleIcon(): javax.accessibility.AccessibleIcon[]
      public getAccessibleRelationSet(): javax.accessibility.AccessibleRelationSet
      public getAccessibleTable(): javax.accessibility.AccessibleTable
      public firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: java.lang.Object | any): void
    }

  }
}
