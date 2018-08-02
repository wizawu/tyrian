declare namespace javax {
    namespace accessibility {
        interface AccessibleTableModelChange {
            INSERT: int
            UPDATE: int
            DELETE: int
            getType(): int
            getFirstRow(): int
            getLastRow(): int
            getFirstColumn(): int
            getLastColumn(): int
        }
    }
}